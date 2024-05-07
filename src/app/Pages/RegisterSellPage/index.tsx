import RegisterSellComponent from "app/Components/RegisterSellComponent";
import { useEffect } from "react";
import { UseAddDrugSlice } from "../AddDrugsPage/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectDrug, selectIsAdding } from "../AddDrugsPage/slice/selector";
import { useParams } from "react-router-dom";
import { FormValues } from "app/Components/RegisterSellComponent/types";
import { UseRegisterDrugSlice } from "../NewDrugRegistrationPage/slice";

const RegisterSellPage = () => {
  // const loading = useSelector(selectIsAdding);
  const { actions } = UseAddDrugSlice();
  const registerDrugActions = UseRegisterDrugSlice();
  const dispatch = useDispatch();
  const { id } = useParams();
  const drugs = useSelector(selectDrug);

  useEffect(() => {
    dispatch(actions.getDrug(id));
  }, []);

  const drugsArray = drugs.map((item) => ({
    value: item._id,
    label: item.name.charAt(0).toUpperCase() + item.name.slice(1),
  }));

  const handleRegister = (values: FormValues) => {
    dispatch(
      registerDrugActions.actions.registerDrug({
        quantity: values.quantity,
        stockId: values.batchNumber,
        pharmacyId: id,
        drug: values.drug,
      })
    );
  };

  return (
    <>
      <RegisterSellComponent
        drugs={drugsArray}
        loading={false}
        handleRegister={handleRegister}
      />
      ;
    </>
  );
};
export default RegisterSellPage;
