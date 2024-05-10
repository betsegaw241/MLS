import FeedbacksComponent from "app/Components/FeedbacksComponent";
import { Feedback } from "./types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseGetFeedbacksSlice } from "./slice";
import {
  selectFeedbacks,
  selectIsDeleted,
  selectIsLoading,
  selectIsCreated,
} from "./slice/selector";
import UserInfo from "app/Components/layouts/Header/userInfo";

const FeedbacksPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const { actions } = UseGetFeedbacksSlice();
  const feedbacks = useSelector(selectFeedbacks);
  const loading = useSelector(selectIsLoading);
  const deleted = useSelector(selectIsDeleted);
  const created = useSelector(selectIsCreated);

  const [role, setRole] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    dispatch(
      actions.getFeedbacks({ page: currentPage, type: type, role: role })
    );
  }, [currentPage, role, type]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const handleFilterByRole = (value: string) => {
    setRole(value);
    setCurrentPage(1);
  };
  const handleFilterType = (value: string) => {
    setType(value);
    setCurrentPage(1);
  };

  const handleDelete = (value: any) => {
    dispatch(actions.getFeedbacks(value));
  };
const handleCreateFeedback = (values: any) => {
  dispatch(
    actions.getFeedbacks({
      title: values.title,
      content: values.content,
      type: type,
    })
  );
};

  return (
    
      <FeedbacksComponent
        feedbacks={feedbacks.data}
        page={currentPage}
        totalPages={feedbacks.totalPages}
        handlePageChange={handlePageChange}
        handleFilterByRole={handleFilterByRole}
        handleFilterType={handleFilterType}
        handleDelete={handleDelete}
        handleCreateFeedback={handleCreateFeedback}
      />
    
  );
};
export default FeedbacksPage;
