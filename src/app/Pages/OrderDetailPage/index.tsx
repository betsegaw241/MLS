import OrderDetailComponent, {
  IStatus,
} from "app/Components/OrdersDetailComponent";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useOrderDetailPageSlice } from "./slices";
import {
  selectOrder,
  selectIsUpdating,
  selectloading,
} from "./slices/selector";
import { useEffect, useState } from "react";
import LoadingPage from "utils/LoadingPage";

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
    if (isUpdating && localStorage.getItem("token")) {
      dispatch(actions.updateStatus(id));
    }
  }, [isUpdating, dispatch, actions, id]);

  async function onRejectClick(): Promise<void> {
    try {
      dispatch(
        actions.updateStatus({
          id: id,
          order: {
            status: "rejected",
          },
        })
      );
    } catch (error) {
      console.error("Error rejecting order:", error);
    }
  }

  async function onAcceptClick(): Promise<void> {
    try {
      dispatch(
        actions.updateStatus({
          id: id,
          order: {
            status: "inprogress",
          },
        })
      );
    } catch (error) {
      console.error("Error accepting order:", error);
    }
  }

  return order[0]?._id ? (
    <OrderDetailComponent
      order={order[0]}
      isUpdating={isUpdating}
      onRejectClick={onRejectClick}
      onAcceptClick={onAcceptClick}
    />
  ) : (
    <LoadingPage />
  );
};

export default OrderDetailPage;
