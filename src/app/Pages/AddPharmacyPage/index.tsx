import AddParmacyComponent from "app/Components/AddPharmacyComponent";
import { initialValues } from "./constants";
import { FormValues } from "./types";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "utils/firebaseConfig";
import { useDispatch } from "react-redux";
import { useAddPharmacyPageSlice } from "./slice";
import api from "../../../API/api";
import { useState } from "react";

const AddPharmacyPage = () => {
  const { actions } = useAddPharmacyPageSlice();
  const dispatch = useDispatch();
  const [pharmacyLisense, setPharmacyLisense] = useState("");
  const formData = new FormData();

  const handleAddPharmacy = async (values: any) => {
    formData.append("file", values.pharmacyLicense);
    await uploadFileAndUpdateState(formData, setPharmacyLisense);
    formData.delete("file");

    dispatch(
      actions.addPharmacy({ ...values, pharmacyLicense: pharmacyLisense })
    );
  };

  async function uploadFileAndUpdateState(
    data: any,
    setState: (res: any) => void
  ) {
    try {
      const res = await api({
        route: `/file/upload`,
        method: "POST",
        isSecureRoute: true,
        body: data,
      });
      if (res) {
        setState(res);
      }
    } catch (error) {
      console.log(error);
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
