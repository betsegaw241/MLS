import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOrderPageSlice } from "app/Pages/OrderPage/slices";
import OrderComponent from "app/Components/OrderComponent";
import { selectOrder } from "./slices/selector";
import LoadingPage from "utils/LoadingPage";
import { useParams } from "react-router-dom";

function OrderPage() {
  const dispatch = useDispatch();
  const { actions } = useOrderPageSlice();
  const orders = useSelector(selectOrder);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const { id } = useParams();

  const fetchOrders = () => {
    dispatch(
      actions.fetchOrders({
        id: id,
        page: currentPage,
        limit: 10,
        searchQuery: query,
      })
    );
  };

  // Function to handle pagination change
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page); // Update currentPage state
  };

  const onSearch = () => {
    fetchOrders();
  };

  const onFilter = () => {
    setCurrentPage(1);
    fetchOrders();
  };

  useEffect(() => {
    fetchOrders();
  }, [currentPage, query]);

  return (
    <>
      {orders.data ? (
        <OrderComponent
          orders={orders}
          currentPage={currentPage}
          pages={orders.totalPages}
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

export default OrderPage;
