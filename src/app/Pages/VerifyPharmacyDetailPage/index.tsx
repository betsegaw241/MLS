import VerifyPharmacyDetailComponent from "app/Components/VerifyPharmacyDetailComponent";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { UseVerifyPharmacySlice } from "./slice";
import { selectIsLoading, selectPharmacy } from "./slice/selector";
import { useEffect } from "react";
import LoadingPage from "utils/LoadingPage";

const VerifyPharmacyDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { actions } = UseVerifyPharmacySlice();
  const pharmacy = useSelector(selectPharmacy);
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(actions.getpharmacy(id));
  }, []);

  const handleVerify = (value: string) => {
    dispatch(actions.verifyPharmacy({ id: id, status: value }));
    navigate("/verifyPharmacy");
  };
  return loading ? (
    <LoadingPage />
  ) : (
    <VerifyPharmacyDetailComponent
      pharmacy={pharmacy}
      loading={false}
      handleVerify={handleVerify}
    />
  );
};
export default VerifyPharmacyDetailPage;
