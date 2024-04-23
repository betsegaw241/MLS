import TransactionDetailComponent from "app/Components/TransactionsDetailComponent";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useTransactionDetailPageSlice } from "./slices";
import { selectTransaction, selectloading } from "./slices/selector";
import { useEffect } from "react";
import LoadingPage from "utils/LoadingPage";

const TransactionDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { actions } = useTransactionDetailPageSlice();
  const transaction = useSelector(selectTransaction);
  const loading = useSelector(selectloading);

  useEffect(() => {
    dispatch(actions.fetchTransaction(id));
  }, []);
  console.log("transactiiion",transaction);

  useEffect(() => {
    dispatch(actions.updateStatus(id));
  }, []);

  return transaction._id ? (
    <TransactionDetailComponent transaction={transaction}/>
  ) : (
    <LoadingPage />
  );
};

export default TransactionDetailPage;
