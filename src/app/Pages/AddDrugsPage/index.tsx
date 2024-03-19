import { useEffect } from "react";
import { UseAddDrugSlice } from "./slice";
import { useDispatch } from "react-redux";
import AddDrugComponent from "app/Components/AddDrugComponent";

const AddDrugPage = () => {
  const { actions } = UseAddDrugSlice();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.addDrug());
  }, []);

  return <AddDrugComponent />;
};
export default AddDrugPage;
