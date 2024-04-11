import StockComponent from "app/Components/StockComponent";
import { useDispatch, useSelector } from "react-redux";
import { UseGetDrugsSlice } from "./slice";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { selectDrugs, selectIsLoading } from "./slice/selector";

const PharmacyStockPage = () => {
  const dispatch = useDispatch();
  const { actions } = UseGetDrugsSlice();
  const drugs = useSelector(selectDrugs);
  const loading = useSelector(selectIsLoading);
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(actions.getDrugs({ id: id, page: currentPage, limit: 10 }));
  }, [currentPage]);

  

  return (
    <StockComponent
      handlePageChange={handlePageChange}
      drugs={drugs}
      loading={loading}
      page={currentPage}
    />
  );
};

export default PharmacyStockPage;
