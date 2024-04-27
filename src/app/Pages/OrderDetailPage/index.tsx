import OrderDetailComponent, { IStatus } from "app/Components/OrdersDetailComponent";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useOrderDetailPageSlice } from "./slices";
import { selectOrder, selectIsUpdating, selectloading } from "./slices/selector";
import { useEffect, useState } from "react";
import LoadingPage from "utils/LoadingPage";
import { IOrder } from "./slices/types";

const OrderDetailPage = () => {
  const { id } = useParams();
const [status, setStatus] = useState<IStatus>({ status: "Pending" });
  const dispatch = useDispatch();
  const { actions } = useOrderDetailPageSlice();
  const order = useSelector(selectOrder);
  const loading = useSelector(selectloading);
  const isUpdating = useSelector(selectIsUpdating);


  useEffect(() => {
    // Dispatch action to fetch orders when component mounts
    dispatch(actions.fetchOrder(id));
  }, []);
  console.log(loading);

useEffect(() => {
  dispatch(actions.updateStatus(id));
}, []);

 
  async function onRejectClick(values: IOrder): Promise<void> {
   
      dispatch(
        actions.updateStatus({
          order: {
            status: values.status,
          },
          id: id,
        })
      );
    
  }
  async function onAcceptClick(values: IOrder): Promise<void> {
    dispatch(
      actions.updateStatus({
        order: {
          status: values.status,
        },
        id: id,
      })
    );
  }

  return order._id ? (
    <OrderDetailComponent
      order={order}
      isUpdating={isUpdating}
      onRejectClick={onRejectClick}
      onAcceptClick={onAcceptClick}
    />
  ) : (
    <LoadingPage />
  );
};

export default OrderDetailPage;
