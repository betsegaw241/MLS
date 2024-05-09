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
  selectUser,
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
  const user = useSelector(selectUser);

  function onLoginClick(values: FormValues) {
    dispatch(actions.login(values));
  }

  useEffect(() => {
    if (isAuthenticated && user?.emailVerified === false) {
      navigate(`/verifyemail`, { state: { email: user?.email } });
    } else if (isAuthenticated && localStorage.getItem("token")) {
      if (role) {
        if (role === "admin" || role === "superAdmin") {
          navigate(`/dashboard`);
        } else if (role === "pharmacist") {
          navigate(`/${role}/home`);
        }
      }
    }
  }, [isAuthenticated, user, role]);

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
