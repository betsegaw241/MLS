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
 //const [transactions, setTransactions] = useState(null);


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
    dispatch(actions.fetchTransactions({id:id, page:currentPage, limit:10}));
  }, [currentPage]);
console.log(transactions)

// useEffect(() => {
//   const transactions = {
//     data: [
//       {
//         sender: "sender_id_here",
//         receiver: "receiver_id_here",
//         orderId: "order_id_here",
//         senderAccount: "100002334848",
//         receiverAccount: "1202938374",
//         amount: 100, // Sample amount
//         tx_ref: "transaction_reference_here",
//         reason: "order-payment", // Sample reason
//         status: "pending", // Sample status
//       },
//       {
//         sender: "sender_id_here",
//         receiver: "receiver_id_here",
//         orderId: "order_id_here",
//         senderAccount: "100002334848",
//         receiverAccount: "1202938374",
//         amount: 100, // Sample amount
//         tx_ref: "transaction_reference_here",
//         reason: "order-payment", // Sample reason
//         status: "pending", // Sample status
//       },
//       {
//         sender: "sender_id_here",
//         receiver: "receiver_id_here",
//         orderId: "order_id_here",
//         senderAccount: "100002334848",
//         receiverAccount: "1202938374",
//         amount: 100, // Sample amount
//         tx_ref: "transaction_reference_here",
//         reason: "order-payment", // Sample reason
//         status: "pending", // Sample status
//       },
//     ],
//     totalPages: 2,
//   };

//   setTransactions(transactions);
// }, []);
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
