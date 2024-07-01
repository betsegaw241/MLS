import AddParmacyComponent from "app/Components/AddPharmacyComponent";
import { initialValues } from "./constants";
import { useDispatch } from "react-redux";
import { useAddPharmacyPageSlice } from "./slice";
import api from "../../../API/api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { selectLoading, selectedAccountCreated } from "./slice/selector";
import { useEffect } from "react";

const AddPharmacyPage = () => {
  const { actions } = useAddPharmacyPageSlice();
  const dispatch = useDispatch();
  const formData = new FormData();
  const navigate = useNavigate();

  const created = useSelector(selectedAccountCreated);
  const loading = useSelector(selectLoading);

  const handleAddPharmacy = async (values: any) => {
    console.log(values)
    formData.append("file", values.pharmacyLicense);
    const uploadedFileUrl = await uploadFileAndUpdateState(formData);
    formData.delete("file");

    if (uploadedFileUrl) {
      dispatch(
        actions.addPharmacy({ ...values, pharmacyLicense: uploadedFileUrl })
      );
    }
  };
  if (created) {
    navigate("/pharmacist/home");
    dispatch(actions.addReset());
  }

  async function uploadFileAndUpdateState(data: any) {
    try {
      const res = await api({
        route: `/file/upload`,
        method: "POST",
        isSecureRoute: true,
        body: data,
      });
      
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  return (
    <>
      <AddParmacyComponent
        initialValues={initialValues}
        errorMessage={""}
        loading={loading}
        handleAddpharmacy={handleAddPharmacy}
      />
    </>
  );
};

export default AddPharmacyPage;
