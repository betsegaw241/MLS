import { UseRegisterDrugSlice } from "./slice";
import { useDispatch } from "react-redux";
import RegisterDrug from "app/Components/RegisterNewDrug";
import { initialValues } from "./validation";
import { Drug } from "./types";
import { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../API/api";

const RegisterDrugPage = () => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const { actions } = UseRegisterDrugSlice();
  const dispatch = useDispatch();
  const { id } = useParams();

  const Register = async (values: Drug) => {
    console.log("Drug values-----:", values);
    let uploadedPhotoUrls :string[] = [];

    if (selectedImages && selectedImages.length > 0) {
      const formData = new FormData();

      for (const file of selectedImages) {
        formData.append("file", file);
        const uploadedUrl = await uploadFileAndUpdateState(formData);
        uploadedPhotoUrls.push(uploadedUrl);
        formData.delete("file");
      }
      values.drugPhoto = uploadedPhotoUrls;
      setSelectedImages([]);
    }

    dispatch(
      actions.registerDrug({
        ...values,
        id: id,
      })
    );
  };

  async function uploadFileAndUpdateState(data: any) {
    try {
      const res = await api({
        route: `/file/upload`,
        method: "POST",
        isSecureRoute: true,
        body: data,
      });
      if (res) {
        return res;
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <RegisterDrug
      Register={Register}
      initialValues={initialValues}
      setSelectedImages={setSelectedImages}
    />
  );
};

export default RegisterDrugPage;
