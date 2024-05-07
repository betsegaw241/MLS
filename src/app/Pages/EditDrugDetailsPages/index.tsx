import EditDrugDetails from "app/Components/EditDrugDetails";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { UseGetDrugDetailSlice } from "../DrugDetailPage/slice";
import { selectDrugs, selectIsLoading } from "../DrugDetailPage/slice/selector";
import { UseEditDrugDetailsSlice } from "./slice";
import { Drug } from "app/Components/EditDrugDetails/types";
import LoadingPage from "utils/LoadingPage";
import api from "../../../API/api";

const EditDrugDetailsPage = () => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const dispatch = useDispatch();
  const { id } = useParams();
  const drugDetailsActions = UseGetDrugDetailSlice();
  const { actions } = UseEditDrugDetailsSlice();
  const drug = useSelector(selectDrugs);
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(drugDetailsActions.actions.getDrugDetail(id));
  }, []);

  // const Edit = (values: Drug) => {
  //   dispatch(actions.editDrug(id));
  // };
  const Edit = async (values: Drug) => {
    console.log("Drug values-----:", values);
    let uploadedPhotoUrls: string[] = [];
    let updatedValues:Drug ={
      name: "",
      dosage: "",
      sideEffects: "",
      instruction: "",
      strength: "",
      minStockLevel: "",
      category: "",
      drugPhoto: [],
      needPrescription: false
    } 
    if (selectedImages && selectedImages.length > 0) {
      const formData = new FormData();

      for (const file of selectedImages) {
        formData.append("file", file);
        const uploadedUrl = await uploadFileAndUpdateState(formData);
        uploadedPhotoUrls.push(uploadedUrl);
        formData.delete("file");
      }

     // Create a copy of the values object
    updatedValues = { ...values };

     // Modify the copy of the object
     updatedValues.drugPhoto = uploadedPhotoUrls;
      setSelectedImages([]);
   }
 
   dispatch(
     actions.editDrug({
       ...updatedValues,
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

  return loading ? (
    <LoadingPage />
  ) : (
    <EditDrugDetails
      Edit={Edit}
      drug={drug}
      // loading={loading}
      setSelectedImages={setSelectedImages}
    />
  );
};
export default EditDrugDetailsPage;
