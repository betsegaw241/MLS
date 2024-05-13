import NewPassword from "app/Components/login_component/newPassword";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useLoginSlice } from "../Login/slice";
import { selectIsLoading, selectPasswordChanged } from "../Login/slice/selectors";
const ChangePasswordPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { actions } = useLoginSlice();
  const loading = useSelector(selectIsLoading);
  const changed = useSelector(selectPasswordChanged);
  const email = localStorage.getItem("verificatioEmail");
  function handleResetPassword(values: any) {
    console.log(values, "--handleResetPassword");
    dispatch(
      actions.changePassword({ email: email, newPassword: values.password })
    );
  }
  if(changed){
    dispatch(actions.reset());
    navigate('/login')
  }
  return (
    <NewPassword loading={loading} handleResetPassword={handleResetPassword} />
  );
};

export default ChangePasswordPage;
