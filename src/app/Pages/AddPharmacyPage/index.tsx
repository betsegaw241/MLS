import AddParmacyComponent from "app/Components/AddPharmacyComponent";
import { initialValues } from "./constants";
import { useDispatch } from "react-redux";
import { useAddPharmacyPageSlice } from "./slice";
import api from "../../../API/api";
import { useSelector } from "react-redux";
import { selectIsAcountCreated } from "../createAccountPage/slice/selector";
import { useNavigate } from "react-router";

const AddPharmacyPage = () => {
  const { actions } = useAddPharmacyPageSlice();
  const dispatch = useDispatch();
  const formData = new FormData();
  const navigate = useNavigate();

  const created = useSelector(selectIsAcountCreated);
  const handleAddPharmacy = async (values: any) => {
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
  }

  async function uploadFileAndUpdateState(data: any) {
    try {
      const res = await api({
        route: `/file/upload`,
        method: "POST",
        isSecureRoute: true,
        body: data,
      });
      return res; // Assuming the response contains the URL of the uploaded file
    } catch (error) {
      console.log(error);
      return null; // Return null if upload fails
    }
  }

  return (
    <>
      <AddParmacyComponent
        initialValues={initialValues}
        errorMessage={""}
        handleAddpharmacy={handleAddPharmacy}
      />
    </>
  );
};

export default AddPharmacyPage;
