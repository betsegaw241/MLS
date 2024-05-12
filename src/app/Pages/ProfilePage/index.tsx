import { useEffect, useState } from "react";
import { EditSchema, changePasswordValidationSchema } from "./validators";
import { useDispatch, useSelector } from "react-redux";
import {
  selectErrorMessage,
  selectIsChangingPassword,
  selectIsEditing,
  selectProfile,
  selectUserExist,
  selectid,
  selectEdited,
  selectIsPasswordChanged,
} from "app/Pages/ProfilePage/slice/selector";
import ProfileComponent from "app/Components/ProfileComponent";
import { useEditProfilePageSlice } from "./slice";
import { IProfile } from "./slice/types";
import LoadingPage from "utils/LoadingPage";
import { passwordinitialValues } from "./constants";
import { changePasswordProp } from "app/Components/changePassword/types";
import api from "../../../API/api";

function ProfilePage() {
  const isEditing = useSelector(selectIsEditing);
  const ischangingPassword = useSelector(selectIsChangingPassword);
  const profile = useSelector(selectProfile);
  const edited = useSelector(selectEdited);
  const user = useSelector(selectUserExist);
  // const id = useSelector(selectid);
  const editing = useSelector(selectIsEditing);
  const passwordChanged = useSelector(selectIsPasswordChanged);

  const errorMessage = useSelector(selectErrorMessage);
  const { actions } = useEditProfilePageSlice();
  const dispatch = useDispatch();
  const userID = localStorage.getItem("id");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const formData = new FormData();
  const [image, setimage] = useState("");

  useEffect(() => {
    dispatch(actions.getUser(userID));
  }, [editing, edited]);

  async function onSaveClick(values: IProfile): Promise<void> {
    const profileData: { [key: string]: any } = {
      phoneNumber: values.phone,
      id: userID,
    };

    if (selectedFile) {
      formData.append("file", selectedFile);
      const uploadedImage = await uploadFileAndUpdateState(formData);
      profileData.avatar = uploadedImage;
    }

    dispatch(actions.editProfile(profileData));
    setimage("");
    setSelectedFile(null);
  }
  const handleFileDrop = (file: File) => {
    setSelectedFile(file);
  };

  async function uploadFileAndUpdateState(data: any) {
    try {
      const res = await api({
        route: `/file/upload`,
        method: "POST",
        isSecureRoute: true,
        body: data,
      });
      if (res) {
        return res;
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleChangePassword = (values: changePasswordProp) => {
    dispatch(
      actions.changePassword({
        id: userID,
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
          passwordChanged={passwordChanged}
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
