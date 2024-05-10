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
import LoadingPage from "utils/LoadingPage";

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
  const [reset, setReset] = useState(false);

  useEffect(() => {
    dispatch(
      actions.getFeedbacks({ page: currentPage, type: type, userRole: role })
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
    setReset(true);
    setCurrentPage(1);
  };
  const handleFilterType = (value: string) => {
    setType(value);
    setReset(true);
    setCurrentPage(1);
  };

  const handleDelete = (value: any) => {
    dispatch(actions.getFeedbacks(value));
  };
  const resetFilter = () => {
    setRole("");
    setType("");
  };

  return loading ? (
    <LoadingPage />
  ) : (
    <FeedbacksComponent
      resetFilter={resetFilter}
      feedbacks={feedbacks.data}
      page={currentPage}
      totalPages={feedbacks.totalPages}
      handlePageChange={handlePageChange}
      handleFilterByRole={handleFilterByRole}
      handleFilterType={handleFilterType}
      handleDelete={handleDelete}
      reset={reset}
    />
  );
};
export default FeedbacksPage;
