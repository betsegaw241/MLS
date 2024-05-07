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
  const [query, setQuery] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [catagory, setCatagory] = useState("");

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const onSearch = () => {
    if (query.length > 0) {
      dispatch(
        actions.getDrugs({
          pharmacyId: id,
          page: currentPage,
          limit: 10,
          drugName: query,
        })
      );
    }
  };
  const onFilter = () => {
    if (catagory || minPrice || maxPrice) {
      dispatch(
        actions.getDrugs({
          pharmacyId: id,
          page: currentPage,
          limit: 10,
          drugName: query,
          catagory: catagory,
          minPrice: minPrice,
          maxPrice: maxPrice,
        })
      );
      setCurrentPage(1)
    }
  };

  useEffect(() => {
    dispatch(
      actions.getDrugs({
        pharmacyId: id,
        page: currentPage,
        limit: 10,
        drugName: query,
        catagory: catagory,
        minPrice: minPrice,
        maxPrice: maxPrice,
      })
    );
  }, [currentPage]);    

  return (
    <StockComponent
      handlePageChange={handlePageChange}
      drugs={drugs}
      setQuery={setQuery}
      onSearch={onSearch}
      setMinPrice={setMinPrice}
      setMaxPrice={setMaxPrice}
      setCatagory={setCatagory}
      onFilter={onFilter}
      loading={loading}
      page={currentPage}
    />
  );
};

export default PharmacyStockPage;
