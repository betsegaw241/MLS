import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseAddDrugSlice } from "./slice";
import AddDrugComponent from "app/Components/AddDrugComponent";
import {
  selectDrug,
  selectIsAdding,
  selectIsAdded
} from "app/Pages/AddDrugsPage/slice/selector";
import { IDrug } from "./slice/types";
import { useParams } from "react-router-dom";

const AddDrugPage = () => {
  const isAdding = useSelector(selectIsAdding);
  const drugs = useSelector(selectDrug);
  const isAdded = useSelector(selectIsAdded);
  const { actions } = UseAddDrugSlice();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(actions.getDrug(id));
  }, []);

  const onAddClick = (values: any) => {
    dispatch(actions.addDrug({...values,id:id}));
  };

  const drugsArray = drugs.map((item) => ({
    value: item._id,
    label: item.name.charAt(0).toUpperCase() + item.name.slice(1),
  }));

  return (
    <AddDrugComponent
      loading={isAdding}
      drugs={drugsArray}
      isAdded={isAdded}
      onAddClick={onAddClick}
      pharmacyId={id}
    />
  );
};

export default AddDrugPage;
