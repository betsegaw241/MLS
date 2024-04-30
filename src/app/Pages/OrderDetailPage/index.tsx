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
    dispatch(actions.fetchOrder(id));
  }, []);

  function onRejectClick() {
    dispatch(
      actions.rejectOrder({
        id: id,
        order: {
          status: "rejected",
        },
      })
    );
  }

  function onAcceptClick() {
    dispatch(
      actions.acceptOrder({
        id: id,
        order: {
          status: "inprogress",
        },
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
