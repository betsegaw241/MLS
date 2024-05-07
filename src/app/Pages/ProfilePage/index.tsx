import { useEffect, useState } from "react";
import { EditSchema, changePasswordValidationSchema } from "./validators";
import { useDispatch, useSelector } from "react-redux";
import {
  selectErrorMessage,
  selectIsAuthenticated,
  selectIsChangingPassword,
  selectIsEditing,
  selectProfile,
  selectUserExist,
  selectid,
} from "app/Pages/ProfilePage/slice/selector";
import ProfileComponent from "app/Components/ProfileComponent";
import { useEditProfilePageSlice } from "./slice";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "utils/firebaseConfig";
import { IProfile } from "./slice/types";
import LoadingPage from "utils/LoadingPage";
import { passwordinitialValues } from "./constants";
import { changePasswordProp } from "app/Components/changePassword/types";

function ProfilePage() {
  const isEditing = useSelector(selectIsEditing);
  const ischangingPassword = useSelector(selectIsChangingPassword);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const profile = useSelector(selectProfile);
  const [data, setData] = useState<IProfile>(profile);
  const user = useSelector(selectUserExist);
  const id = useSelector(selectid);
  const errorMessage = useSelector(selectErrorMessage);
  const { actions } = useEditProfilePageSlice();
  const dispatch = useDispatch();
  const userID = localStorage.getItem("id");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [image, setImage] = useState<any>();

  useEffect(() => {
    dispatch(actions.getUser(userID));
  }, []);

  async function onSaveClick(values: IProfile): Promise<void> {
    if (selectedFile) {
      const avatar = await handleUpload(selectedFile);
      setImage(avatar);

      dispatch(
        actions.editProfile({
          user: {
            phoneNumber: values.phone,
            avatar: avatar,
          },
          id: userID,
        })
      );
    } else {
      dispatch(
        actions.editProfile({
          user: {
            phoneNumber: values.phone,
          },
          id: userID,
        })
      );
    }
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

  const handleChangePassword = (values: changePasswordProp) => {
    dispatch(
      actions.changePassword({
        id: id,
        oldPassword: values.currentPassword,
        newPassword: values.confirmPassword,
      })
    );
  };

  return (
    <>
      {user ? (
        <ProfileComponent
          errorMessage={errorMessage}
          initialValues={profile}
          isEditing={isEditing}
          PasswordValidationSchema={changePasswordValidationSchema}
          ischangingPassword={ischangingPassword}
          EditSchema={EditSchema}
          onSaveClick={onSaveClick}
          profile={handleFileDrop}
          changePassword={handleChangePassword}
          PinitialValue={passwordinitialValues}
        />
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

export default ProfilePage;
