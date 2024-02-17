import { useEffect } from "react";
import { initialValues } from "./constants";
import { EditSchema } from "./validators";
import {useSelector } from "react-redux";
import {
  selectErrorMessage,
  selectIsAuthenticated,
  selectIsEditing,
} from "app/Pages/ProfilePage/slice/selector";
import { FormValues } from "./types";
import ProfileComponent from "app/Components/ProfileComponent";
function ProfilePage() {
  const isEditing = useSelector(selectIsEditing);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const errorMessage = useSelector(selectErrorMessage);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated && localStorage.getItem("token")) {
      //navigate(`/${role}/dashboard`);
    }
  }, [isAuthenticated]);

  function onSaveClick(_values: FormValues): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <ProfileComponent
        errorMessage={errorMessage}
      initialValues={initialValues}
        isEditing={isEditing}
        EditSchema={EditSchema}  
        onSaveClick={onSaveClick}
      />
    </>
  );
}

export default ProfilePage;
