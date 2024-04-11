import { useDispatch, useSelector } from "react-redux";
import { UseGetDrugDetailSlice } from "./slice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { selectDrugs, selectDrugStck, selectIsLoading } from "./slice/selector";
import DrugDetailsComponent from "app/Components/DrugDetailsComponent";

const DrugDetailPage = () => {
  const dispatch = useDispatch();
  const { actions } = UseGetDrugDetailSlice();
  const drug = useSelector(selectDrugs);
  const drugStck = useSelector(selectDrugStck);
  const Loading = useSelector(selectIsLoading);

  const { id } = useParams();

  useEffect(() => {
    dispatch(actions.getDrugDetail(id));
    dispatch(actions.getDrugStock(id));
  }, []);

  return (
    <DrugDetailsComponent
      drug={drug}
      drugStock={drugStck}
      loading={Loading}
      errorMessage={""}
    />
  );
};

export default DrugDetailPage;
