import { useEffect, useState } from "react";
import { EditSchema } from "./validators";
import { useDispatch, useSelector } from "react-redux";
import {
  selectErrorMessage,
  selectIsAuthenticated,
  selectIsEditing,
  selectProfile,
  selectUserExist,
} from "app/Pages/ProfilePage/slice/selector";
import ProfileComponent from "app/Components/ProfileComponent";
import { useEditProfilePageSlice } from "./slice";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "utils/firebaseConfig";
import { IProfile } from "./slice/types";

function ProfilePage() {
  const isEditing = useSelector(selectIsEditing);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const profile = useSelector(selectProfile);
  const [data, setData] = useState<IProfile>(profile);
  const user = useSelector(selectUserExist);
  const errorMessage = useSelector(selectErrorMessage);
  const { actions } = useEditProfilePageSlice();
  const dispatch = useDispatch();
  const userID = localStorage.getItem("id");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [image, setImage] = useState<any>();

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //   }
  // }, []);


  useEffect(() => {
    dispatch(actions.getUser(userID));
  }, []);


  // useEffect(() => {
  //   if (isAuthenticated && localStorage.getItem("token")) {
  //   }
  // }, [isAuthenticated]);

  async function onSaveClick(values: IProfile): Promise<void> {
    setData((prev) => ({ ...prev, ...values }));
    if (selectedFile) {
      const avatar = await handleUpload(selectedFile);
      setImage(avatar);
    }
    console.log(data.firstName, data.lastName, data.phone, image, data.email);

    dispatch(
      actions.editProfile({
        user: {
          name: `${data.firstName} ${data.lastName}`,
          phoneNumber: data.phone,
          avatar: image ? image : data.avatar,
          email: data.email,
        },
        id: userID,
      })
    );
  }

  const handleUpload = (file: File) => {
    return new Promise((resolve, reject) => {
      if (file) {
        const storageRef = ref(storage, file.name);

        uploadBytes(storageRef, file)
          .then(() => {
            getDownloadURL(storageRef)
              .then((downloadURL: string) => {
                resolve(downloadURL);
              })
              .catch((error) => {
                console.error("Error getting download URL:", error);
                reject(error);
              });
          })
          .catch((error) => {
            console.error("Error uploading file:", error);
            reject(error);
          });
      } else {
        console.error("No file selected.");
        reject(new Error("No file selected."));
      }
    });
  };
  const handleFileDrop = (file: File) => {
    setSelectedFile(file);
  };
  return (
    <>
      {user && (
        <ProfileComponent
          errorMessage={errorMessage}
          initialValues={profile}
          isEditing={isEditing}
          EditSchema={EditSchema}
          onSaveClick={onSaveClick}
          profile={handleFileDrop}
        />
      )}
    </>
  );
}

export default ProfilePage;
