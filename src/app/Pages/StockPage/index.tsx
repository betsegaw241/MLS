import StockComponent from "app/Components/StockComponent";
import { useDispatch, useSelector } from "react-redux";
import { UseGetDrugsSlice } from "./slice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { selectDrugs } from "./slice/selector";

const PharmacyStockPage = () => {
  const dispatch = useDispatch();
  const { actions } = UseGetDrugsSlice();
  const drugs = useSelector(selectDrugs);

  const { id } = useParams();

  useEffect(() => {
    dispatch(actions.getDrugs(id));
  }, []);

  return <StockComponent drugs={drugs} />;
};

export default PharmacyStockPage;
