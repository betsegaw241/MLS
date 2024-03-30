import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseAddDrugSlice } from "./slice";
import AddDrugComponent from "app/Components/AddDrugComponent";
import {
  selectDrug,
  selectIsAdding,
} from "app/Pages/AddDrugsPage/slice/selector";
import { IDrug } from "./slice/types";
import { useParams } from "react-router-dom";

const AddDrugPage = () => {
  const isAdding = useSelector(selectIsAdding);
  const drug = useSelector(selectDrug);
  const { actions } = UseAddDrugSlice();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(actions.getDrug(id));
  }, []);

  const onAddClick = (values: IDrug) => {
    dispatch(actions.addDrug(values));
  };
  const drugs = [
    { value: "aspirin", label: "Aspirin" },
    { value: "ibuprofen", label: "Ibuprofen" },
    { value: "acetaminophen", label: "Acetaminophen" },
    { value: "naproxen", label: "Naproxen" },
    { value: "metformin", label: "Metformin" },
    { value: "amlodipine", label: "Amlodipine" },
    { value: "atorvastatin", label: "Atorvastatin" },
    { value: "lisinopril", label: "Lisinopril" },
    { value: "simvastatin", label: "Simvastatin" },
    { value: "levothyroxine", label: "Levothyroxine" },
  ];

  return (
    <AddDrugComponent
      loading={isAdding}
      drugs={drugs}
      onAddClick={onAddClick}
      pharmacyId={id}
    />
  );
};

export default AddDrugPage;
