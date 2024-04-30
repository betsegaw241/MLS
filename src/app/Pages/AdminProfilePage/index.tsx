import AdminProfileComponent from "app/Components/AdminProfileComponent";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAdminProfilePageSlice } from "./slice";
import {
  selectErrorMessage,
  selectIsChangingPassword,
  selectProfile,
} from "./slice/selector";
import { IProfile } from "./slice/types";

const AdminProfilePage = () => {
  // const isEditing = useSelector(selectIsEditing);
  const ischangingPassword = useSelector(selectIsChangingPassword);
  const profile = useSelector(selectProfile);
  // const [data, setData] = useState<IProfile>(profile);
  const errorMessage = useSelector(selectErrorMessage);
  const { actions } = useAdminProfilePageSlice();
  const dispatch = useDispatch();
  const userID = localStorage.getItem("id");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [image, setImage] = useState<any>();

  useEffect(() => {
    dispatch(actions.getUser(userID));
  }, []);

  const handleChangePassword = (values: IProfile) => {
    dispatch(
      actions.changePassword({
        id: profile._id,
        oldPassword: values.currentPassword,
        newPassword: values.confirmPassword,
      })
    );
  };

  return (
    <AdminProfileComponent
      handleChangePassword={handleChangePassword}
      ischangingPassword={ischangingPassword}
      profile={profile}
      errorMessage={errorMessage}
    />
  );
};

export default AdminProfilePage;
