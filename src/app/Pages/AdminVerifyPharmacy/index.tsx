import { useDispatch, useSelector } from "react-redux";
import { UseVerifyPharmaciesSlice } from "./slice";
import { useEffect, useState } from "react";
import { selectPharmacies } from "./slice/selector";
import AdminVerifyPharmacyComponent from "app/Components/AdminVerifyPharmacy";
import { useLocation } from "react-router-dom";

const AdminVerifyPharmacy = () => {
  const { actions } = UseVerifyPharmaciesSlice();
  const dispatch = useDispatch();
  const [pharmacyLisense, setPharmacyLisense] = useState("");
  const pharmacies = useSelector(selectPharmacies);
  const [currentPage, setCurrentPage] = useState(1);
  const [role, setRole] = useState("");

  useEffect(() => {
    dispatch(actions.getpharmacies({ page: currentPage, role: role }));
  }, [currentPage, role]);
  const location = useLocation();
  const data = location.state;

  const handleVerify = (values: any) => {
    console.log(values);
  };
  return (
    <>
      <AdminVerifyPharmacyComponent
        loading={false}
        pharmacies={pharmacies}
        handleVerify={handleVerify}
      />
    </>
  );
};

export default AdminVerifyPharmacy;
