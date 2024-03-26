import { useEffect } from "react";
import { UseRegisterDrugSlice } from "./slice";
import { useDispatch } from "react-redux";
import RegisterDrug from "app/Components/RegisterNewDrug";

const RegisterDrugPage = () => {
  const { actions } = UseRegisterDrugSlice();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.registerDrug());
  }, []);

  return <RegisterDrug />;  
};
export default RegisterDrugPage;
