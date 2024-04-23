import FeedbacksComponent from "app/Components/FeedbacksComponent";
import { Feedback } from "./types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseGetFeedbacksSlice } from "./slice";
import {
  selectFeedbacks,
  selectIsDeleted,
  selectIsLoading,
} from "./slice/selector";

const FeedbacksPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const { actions } = UseGetFeedbacksSlice();
  const feedbacks1 = useSelector(selectFeedbacks);
  const loading = useSelector(selectIsLoading);
  const deleted = useSelector(selectIsDeleted);
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");

  const sampleFeedbacks: Feedback[] = [
    {
      userId: "dd04959b-7035-41ab-b846-0e050613a228",
      title: "Billing Error",
      content:
        "I noticed an overcharge on my recent bill. Can you please review and rectify this I noticed an overcharge on my recent bill. Can you please review and rectify this I noticed an overcharge on my recent bill. Can you please review and rectify this?",
      type: "complaint",
      status: "pending",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: "dd04959b-7035-41ab-b846-0e050613a228",
      title: "Add Dark Mode Option",
      content:
        "It would be great to have a dark mode option for better usability during nighttime. Many apps are implementing this feature, and I think it would benefit our users as well.",
      type: "suggestion",
      status: "pending",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: "dd04959b-7035-41ab-b846-0e050613a228",
      title: "How to Change Email Address?",
      content:
        "I'm having trouble finding the option to change my email address in the account settings. Can you please guide me on how to do this?",
      type: "question",
      status: "pending",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  useEffect(() => {
    dispatch(
      actions.getFeedbacks({ page: currentPage, type: type, status: status })
    );
  }, [currentPage, status, type]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const handleFilterStatus = (value: string) => {
    setStatus(value);
    setCurrentPage(1);
  };
  const handleFilterType = (value: string) => {
    setType(value);
    setCurrentPage(1);
  };

  const handleDelete = (value :any) => {
    dispatch(actions.getFeedbacks(value));
  };

  return (
    <FeedbacksComponent
      feedbacks={sampleFeedbacks}
      page={currentPage}
      totalPages={1}
      handlePageChange={handlePageChange}
      handleFilterStatus={handleFilterStatus}
      handleFilterType={handleFilterType}
      handleDelete={handleDelete}
    />
  );
};
export default FeedbacksPage;
