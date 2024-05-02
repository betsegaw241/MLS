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
import { usePharmacyAccountSlice } from "../PharmacyAccountPage/slices";
import { selectPharmacy } from "../PharmacyAccountPage/slices/selector";

const OrderDetailPage = () => {
  const { id } = useParams();
  const [status, setStatus] = useState<IStatus>({ status: "Pending" });
  const dispatch = useDispatch();
  const { actions } = useOrderDetailPageSlice();
  const order = useSelector(selectOrder);
  const loading = useSelector(selectloading);
  const isUpdating = useSelector(selectIsUpdating);
  const  pharmacyActions  = usePharmacyAccountSlice();
  const pharmacy = useSelector(selectPharmacy);

  useEffect(() => {
    dispatch(actions.fetchOrder(id));
  }, []);

  useEffect(() => {
    dispatch(pharmacyActions.actions.getpharmacyDetail(order.pharmacy?._id));
  }, [order]);

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
    pharmacy={pharmacy}
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
