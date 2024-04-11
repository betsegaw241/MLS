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
  const { id } = useParams();

  
    // Function to handle pagination change
    const handlePageChange = (
      event: React.ChangeEvent<unknown>,
      page: number
    ) => {
      setCurrentPage(page); // Update currentPage state
    };
    
  useEffect(() => {
    // Dispatch action to fetch orders when component mounts
    dispatch(actions.fetchOrders({id:id, page:currentPage, limit:10}));
  }, [currentPage]);
console.log(orders)


  return (
    <>
      {orders.data ? (
        <OrderComponent
          orders={orders}
          currentPage={currentPage}
          pages={orders.totalPages}
          onPageChange={handlePageChange}
        />
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

export default OrderPage;
