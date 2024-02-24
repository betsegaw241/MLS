import { useEffect } from "react";
import LoginComponent from "app/Components/login_component/login";
import { initialValues } from "./constants";
import { loginInSchema } from "./validators";
import { useDispatch, useSelector } from "react-redux";
import {
  selectErrorMessage,
  selectIsAuthenticated,
  selectIsLogging,
  selectRole,
} from "./slice/selectors";
import { useNavigate } from "react-router";
import { FormValues } from "./types";
import { useLoginSlice } from "./slice";
function LoginPage() {
  const { actions } = useLoginSlice();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const role = useSelector(selectRole);
  const isLogging = useSelector(selectIsLogging);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const errorMessage = useSelector(selectErrorMessage);

  function onLoginClick(values: FormValues) {
    dispatch(actions.login(values));
  }
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate(`/${role}/home`);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated && localStorage.getItem("token")) {
      navigate(`/${role}/home`);
    }
  }, [isAuthenticated]);

  return (
    <>
      <LoginComponent
        errorMessage={errorMessage}
        initialValues={initialValues}
        isLogging={isLogging}
        loginInSchema={loginInSchema}
        onLoginClick={onLoginClick}
      />
    </>
  );
}

export default LoginPage;
