import OrderDetailComponent from "app/Components/OrdersDetailComponent";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useOrderDetailPageSlice } from "./slices";
import { selectOrder, selectloading } from "./slices/selector";
import { useEffect } from "react";
import LoadingPage from "utils/LoadingPage";

const OrderDetailPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { actions } = useOrderDetailPageSlice();

  const order = useSelector(selectOrder);
  const loading = useSelector(selectloading);

  useEffect(() => {
    // Dispatch action to fetch orders when component mounts
    dispatch(actions.fetchOrder(id));
  }, []);
  console.log(loading);

  ///////>>>>>>>>>>> instead of "order._id &&" make usestate and when data is loaded change its value and send orders as the following  
  return (
   
      order._id ? (<OrderDetailComponent order={order} />
      ):(
      <LoadingPage />)

  );
};

export default OrderDetailPage;
