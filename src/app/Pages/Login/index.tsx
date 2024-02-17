import { useEffect } from 'react';
import LoginComponent from 'app/Components/login_component/login';
import { initialValues } from './constants';
import { loginInSchema } from './validators';
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
function LoginPage() {
  const { actions } = useDefaultLayoutSlice();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const role = useSelector(selectRole);
  const isLogging = useSelector(selectIsLogging);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const errorMessage = useSelector(selectErrorMessage);
  
  function onLoginClick(values: FormValues) {
    localStorage.setItem('token','fkwepfokpeo'),
    localStorage.setItem('role','pharmacy'),
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
