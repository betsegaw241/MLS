import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOrderPageSlice } from "app/Pages/OrderPage/slices";
import OrderComponent from "app/Components/OrderComponent";
import { selectOrder } from "./slices/selector";

function OrderPage() {
  const dispatch = useDispatch();
  const { actions } = useOrderPageSlice();

  const orders = useSelector(selectOrder);

  useEffect(() => {
    // Dispatch action to fetch orders when component mounts
    dispatch(actions.fetchOrders());
  }, []);

  return(
   orders.length > 1 && <OrderComponent orders={orders} />
    
  );
}

export default OrderPage;
