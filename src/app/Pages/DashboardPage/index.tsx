import { useDispatch } from "react-redux";

import { useEffect } from "react";
import { useParams } from "react-router";
import { useDashboardSlice } from "./slice";

const DashBoardPage = () => {
  const { actions } = useDashboardSlice();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(actions.GetPharmacy(id));
  }, []);

  return <></>;
};
export default DashBoardPage;
