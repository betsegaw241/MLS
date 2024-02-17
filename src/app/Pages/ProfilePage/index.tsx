import { useEffect } from "react";
import { initialValues } from "./constants";
import { EditSchema } from "./validators";
import { useDispatch, useSelector } from "react-redux";
import {
  selectErrorMessage,
  selectIsAuthenticated,
  selectIsLogging,
} from "../Layout/slice/selectors";
import { useDefaultLayoutSlice } from "../Layout/slice";
import { useNavigate } from "react-router";
import { FormValues } from "./types";
import ProfileComponent from "app/Components/ProfileComponent";
function ProfilePage() {
  const { actions } = useDefaultLayoutSlice();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogging = useSelector(selectIsLogging);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const errorMessage = useSelector(selectErrorMessage);

  function onSaveClick(values: FormValues) {
    //localStorage.setItem("token", "fkwepfokpeo"),
    //   localStorage.setItem("role", "pharmacy"),
    //   dispatch(actions.save(values));
  }
  useEffect(() => {
    if (localStorage.getItem("token")) {
      
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated && localStorage.getItem("token")) {
      //navigate(`/${role}/dashboard`);
    }
  }, [isAuthenticated]);

  return (
    <>
      <ProfileComponent
        errorMessage={errorMessage}
        initialValues={initialValues}
        isLogging={isLogging}
        EditSchema={EditSchema}
        onLoginClick={onSaveClick}
      />
    </>
  );
}

export default ProfilePage;
