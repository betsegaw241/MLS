import VerifyEmailComponent from "app/Components/verifyEmail";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useVerifyAccountPageSlice } from "./slice";
import { selectIsAcountVerified } from "./slice/selector";

const VerifyEmailPage = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const data = location.state;

  const dispatch = useDispatch();
  const { actions } = useVerifyAccountPageSlice();
  const verified = useSelector(selectIsAcountVerified);

  // useEffect(() => {
  //   navigate("/verifiedemail");
  // }, [verified]);

  const onHandleVerify = (value: any) => {
    console.log("otp--", value);
    dispatch(actions.verifyAccount({ otp: Number(value), email: data.email }));
  };

  return (
    <VerifyEmailComponent onHandleVerify={onHandleVerify} verified={verified} />
  );
};

export default VerifyEmailPage;
