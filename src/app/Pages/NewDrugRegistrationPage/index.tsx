import { UseRegisterDrugSlice } from "./slice";
import { useDispatch } from "react-redux";
import RegisterDrug from "app/Components/RegisterNewDrug";
import { initialValues } from "./validation";
import { Drug } from "./types";
import { useState } from "react";

const RegisterDrugPage = () => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const { actions } = UseRegisterDrugSlice();
  const dispatch = useDispatch();

  const Register = (values: Drug) => {
    console.log("values@page", values);
    console.log("selectedImages", selectedImages);

    // dispatch(actions.registerDrug({ ...values }));
  };

  return (
    <RegisterDrug
      Register={Register}
      initialValues={initialValues}
      setSelectedImages={setSelectedImages}
    />
  );
};

export default RegisterDrugPage;
