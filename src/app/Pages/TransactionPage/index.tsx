import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTransactionSlice } from "app/Pages/TransactionPage/slices";
import TransactionComponent from "app/Components/TransactionComponent";
import { selectTransaction } from "./slices/selector";
import LoadingPage from "utils/LoadingPage";
import { useParams } from "react-router-dom";

function TransactionPage() {
  const dispatch = useDispatch();
  const { actions } = useTransactionSlice();
  const transactions = useSelector(selectTransaction);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const { id } = useParams();
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };
  const onSearch = () => {
    if (query.length > 0) {
      dispatch(
        actions.fetchTransactions({
          id: id,
          page: currentPage,
          limit: 10,
          transactionName: query,
        })
      );
    }
  };
  const onFilter = () => {
    dispatch(
      actions.fetchTransactions({
        id: id,
        page: currentPage,
        limit: 10,
        transactionName: query,
      })
    );
    setCurrentPage(1);
  };

  useEffect(() => {
    dispatch(
      actions.fetchTransactions({ id: id, page: currentPage, limit: 10 })
    );
  }, [currentPage]);
  console.log(transactions);

  return (
    <>
      {transactions ? (
        <TransactionComponent
          transactions={transactions}
          currentPage={currentPage}
          pages={transactions.totalPages}
          onPageChange={handlePageChange}
          onFilter={onFilter}
          setQuery={setQuery}
          onSearch={onSearch}
        />
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

export default TransactionPage;
