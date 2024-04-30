import FeedBacksDetailComponent from "app/Components/FeedBackDetailComponent";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UseGetFeedbacksDetailSlice } from "./slice";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFeedbacks,
  selectIsDeleted,
  selectIsLoading,
} from "./slice/selector";
import LoadingPage from "utils/LoadingPage";

const FeedbackDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { actions } = UseGetFeedbacksDetailSlice();
  const feedback = useSelector(selectFeedbacks);
  const deleted = useSelector(selectIsDeleted);
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(actions.getFeedback(id));
  }, []);

  const handleDeleteFeedback = () => {
    dispatch(actions.deleteFeedbacks(id));
    if (deleted) {
      navigate("/Feedbacks");
    }
  };
  if (loading) {
  }

  return (
    <>
      <FeedBacksDetailComponent
        feedback={feedback}
        handleDeleteFeedback={handleDeleteFeedback}
      />
    </>
  );
};

export default FeedbackDetailPage;
