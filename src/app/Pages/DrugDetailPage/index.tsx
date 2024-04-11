import { useDispatch, useSelector } from "react-redux";
import { UseGetDrugDetailSlice } from "./slice";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { selectDrugs, selectDrugStck, selectIsLoading } from "./slice/selector";
import DrugDetailsComponent from "app/Components/DrugDetailsComponent";

const DrugDetailPage = () => {
  const dispatch = useDispatch();
  const { actions } = UseGetDrugDetailSlice();
  const drug = useSelector(selectDrugs);
  const drugStck = useSelector(selectDrugStck);
  const Loading = useSelector(selectIsLoading);
  const [currentPage, setCurrentPage] = useState(1);

  const { id } = useParams();

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(actions.getDrugDetail(id));
  }, []);

  useEffect(() => {
    dispatch(actions.getDrugStock({ id: id, page: currentPage, limit: 10 }));
  }, [currentPage]);

  return (
    <DrugDetailsComponent
      drug={drug}
      drugStock={drugStck}
      handlePageChange={handlePageChange}
      loading={Loading}
      errorMessage={""}
      page={currentPage}
    />
  );
};

export default DrugDetailPage;
