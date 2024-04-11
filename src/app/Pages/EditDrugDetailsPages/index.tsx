import EditDrugDetails from "app/Components/EditDrugDetails";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { UseGetDrugDetailSlice } from "../DrugDetailPage/slice";
import { selectDrugs, selectIsLoading } from "../DrugDetailPage/slice/selector";
import { UseEditDrugDetailsSlice } from "./slice";
import { Drug } from "app/Components/EditDrugDetails/types";
import LoadingPage from "utils/LoadingPage";

const EditDrugDetailsPage = () => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  // const { actions } = UseRegisterDrugSlice();
  const dispatch = useDispatch();
  const { id } = useParams();
  const drugDetailsActions = UseGetDrugDetailSlice();
  const { actions } = UseEditDrugDetailsSlice();
  const drug = useSelector(selectDrugs);
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(drugDetailsActions.actions.getDrugDetail(id));
  }, []);

  const Edit = (values: Drug) => {
    dispatch(actions.editDrug(id));
  };

  return loading ? (
    <LoadingPage />
  ) : (
    <EditDrugDetails
      Edit={Edit}
      drug={drug}
      // loading={loading}
      setSelectedImages={setSelectedImages}
    />
  );
};
export default EditDrugDetailsPage;
