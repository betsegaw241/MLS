import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseCreateFeedbacksSlice } from "./slice";
import {
selectIsCreated,
} from "./slice/selector";
import UserInfo from "app/Components/layouts/Header/userInfo";
import { initialValues } from "../Pharmacistfeedback/constants";
import { useNotificationPageSlice } from "../Notification/slices";

const HeaderPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const { actions } = UseCreateFeedbacksSlice();
  const isCreated = useSelector(selectIsCreated);
  const action = useNotificationPageSlice();

  const [type, setType] = useState("");

  useEffect(() => {
  dispatch(action.actions.fetchNotifications(''));
   }, []);


  const handleCreateFeedback = (values: any) => {
    dispatch(
      actions.createFeedbacks({
        title: values.title,
        content: values.content,
        type: type,
      })
    );
  };

  return (
    <>
      <UserInfo
        handleCreateFeedback={handleCreateFeedback}
        initialValues={initialValues}
        errorMessage={""}
        setType={setType}
        isCreated={isCreated}
      />
    </>
  );
};
export default HeaderPage;
