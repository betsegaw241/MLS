import VerifiedEmail from "app/Components/verifyEmail";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useVerifyAccountPageSlice } from "./slice";

const VerifyEmailPage = () => {
  const location = useLocation();
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const { actions } = useVerifyAccountPageSlice();

  useEffect(() => {
    const parseQueryParams = () => {
      const urlParams = new URLSearchParams(location.search);
      return {
        token: urlParams.get("token") || "",
        email: urlParams.get("email") || "",
      };
    };
    const { token, email } = parseQueryParams();
    setToken(token);
    setEmail(email);

    if (token && email) {
      console.log(token, email);
      dispatch(
        actions.verifyAccount({
          email: email,
          token: token,
        })
      );
    }
  }, [location.search]);

  return <VerifiedEmail />;
};
export default VerifyEmailPage;
