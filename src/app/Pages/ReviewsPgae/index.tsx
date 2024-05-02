import ReviewsComponent from "app/Components/ReviewsComponent";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { UseReviewPageSlice } from "./slice";
import { selectReviews } from "./slice/selector";
import { selectPharmacy } from "../PharmacyAccountPage/slices/selector";
import { usePharmacyAccountSlice } from "../PharmacyAccountPage/slices";

const ReviewsPgae = () => {
  const dispatch = useDispatch();
  const { actions } = UseReviewPageSlice();
  const reviews = useSelector(selectReviews);
  const pharmacy = useSelector(selectPharmacy);
  const pharmacyDeatilactions = usePharmacyAccountSlice();

  const [currentPage, setCurrentPage] = useState(1);
  const { id } = useParams();

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page); // Update currentPage state
  };

  useEffect(() => {
    dispatch(
      actions.fetchReviews({ pharmacyId: id, page: currentPage, limit: 10 })
    );
  }, [currentPage]);
  useEffect(() => {
    dispatch(pharmacyDeatilactions.actions.getpharmacyDetail(id));
  }, []);

  console.log("reviews", reviews);

  return (
    <ReviewsComponent
      reviews={reviews.data}
      pharmacy={pharmacy}
      totalPages={reviews.totalPages}
      totalDocuments={reviews.totalDocuments}
      handlePageChange={handlePageChange}
      page={currentPage}
    />
  );
};
export default ReviewsPgae;
