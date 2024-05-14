import VerifyEmailComponent from "app/Components/verifyEmail";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useVerifyAccountPageSlice } from "./slice";
import { selectErrorMessage, selectIsAcountVerified, selectVerifying } from "./slice/selector";

const VerifyEmailPage = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const data = location.state;

  const dispatch = useDispatch();
  const { actions } = useVerifyAccountPageSlice();
  const verified = useSelector(selectIsAcountVerified);
  const verifying = useSelector(selectVerifying);
  const error = useSelector(selectErrorMessage);

  // useEffect(() => {
  //   navigate("/verifiedemail");
  // }, [verified]);

  const onHandleVerify = (value: any) => {
    dispatch(actions.verifyAccount({ code: value, email: data.email }));
  };

  return (
    <VerifyEmailComponent
      verifying={verifying}
      onHandleVerify={onHandleVerify}
      verified={verified}
      error={error}
    />
  );
};

export default VerifyEmailPage;
