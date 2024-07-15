import { useEffect } from "react";
import LoginComponent from "app/Components/login_component/login";
import { initialValues } from "./constants";
import { loginInSchema } from "./validators";
import { useDispatch, useSelector } from "react-redux";
import {
  selectErrorMessage,
  selectIsAuthenticated,
  selectIsLoading,
  selectIsLogging,
  selectOtpSent,
  selectOtpVerified,
  selectRole,
  selectUser,
} from "./slice/selectors";
import { useNavigate } from "react-router";
import { FormValues } from "./types";
import { useLoginSlice } from "./slice";
import { IforgetPasswordIntialValue } from "app/Components/login_component/types";
function LoginPage() {
  const { actions } = useLoginSlice();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const role = useSelector(selectRole);
  const isLogging = useSelector(selectIsLogging);
  const loading = useSelector(selectIsLoading);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const errorMessage = useSelector(selectErrorMessage);
  const user = useSelector(selectUser);
  const OtpSent = useSelector(selectOtpSent);
  const OtpVerified = useSelector(selectOtpVerified);
  const verificationemail = localStorage.getItem("verificatioEmail");

  function onLoginClick(values: FormValues) {
    dispatch(actions.login(values));
  }

  useEffect(() => {
    if (isAuthenticated && user?.emailVerified === false) {
      navigate(`/verifyemail`, { state: { email: user?.email } });
      dispatch(actions.sendOtp({ email: user.email, type: "verify" }));
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

  function forgetPassword(values: IforgetPasswordIntialValue) {
    localStorage.setItem("verificatioEmail", values.email);
    dispatch(actions.sendOtp({ email: values.email, type: "forgot" }));
  }

  function handleVerifyOtp(values: any) {
    dispatch(actions.verifyOtp({ email: verificationemail, code: values }));
  }

  if (OtpVerified) {
    navigate("/changePassword");
    dispatch(actions.reset());
  }
  return (
    <>
      <LoginComponent
        OtpSent={OtpSent}
        loading={loading}
        OtpVerified={OtpVerified}
        errorMessage={errorMessage}
        initialValues={initialValues}
        isLogging={isLogging}
        loginInSchema={loginInSchema}
        onLoginClick={onLoginClick}
        forgetPassword={forgetPassword}
        handleVerifyOtp={handleVerifyOtp}
      />
    </>
  );
}

export default LoginPage;
