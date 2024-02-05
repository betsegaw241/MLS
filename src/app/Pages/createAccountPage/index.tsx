import { useEffect } from 'react';
import CreateAccount from "app/Components/create_account/createAccount";
import { initialValues } from './constants';
import { signupSchema } from "./validators";
import { useDispatch, useSelector } from 'react-redux';
import {
  selectErrorMessage,
  selectIsAuthenticated,
  selectIsLogging,
  selectRole,
} from '../Layout/slice/selectors';
import { useDefaultLayoutSlice } from '../Layout/slice';
import { useNavigate } from 'react-router';
import { FormValues } from './types';
function SignUpPage() {
  const { actions } = useDefaultLayoutSlice();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const role = useSelector(selectRole);
  // const isLogging = useSelector(selectIsLogging);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const errorMessage = useSelector(selectErrorMessage);
  
  function onSignupClick(values: FormValues) {
    dispatch(actions.login(values));
  }
  useEffect(() => {
    if (localStorage.getItem('token')) {
     
      navigate(`/${role}/dashboard`);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated && localStorage.getItem('token')) {
      navigate(`/${role}/dashboard`);
    }
  }, [isAuthenticated]);

  return (
    <>
      <CreateAccount
        errorMessage={errorMessage}
        initialValues={initialValues}
        // isSigningup={isSigningup}
        signupSchema={signupSchema}
        onSignupClick={onSignupClick}
      />
    </>
  );
}

export default SignUpPage;
