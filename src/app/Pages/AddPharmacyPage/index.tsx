import AddParmacyComponent from "app/Components/AddPharmacyComponent";
import { initialValues } from "./constants";
import { FormValues } from "./types";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "utils/firebaseConfig";
import { useDispatch } from "react-redux";
import { useAddPharmacyPageSlice } from "./slice";

const AddPharmacyPage = () => {

  const { actions } = useAddPharmacyPageSlice();
  const dispatch = useDispatch();

  const handleUpload = (file: any) => {
    return new Promise((resolve, reject) => {
      if (file) {
        const storageRef = ref(storage, file.name);

        uploadBytes(storageRef, file)
          .then((snapshot) => {
            getDownloadURL(storageRef)
              .then((downloadURL) => {
                resolve(downloadURL);
              })
              .catch((error) => {
                console.error("Error getting download URL:", error);
                reject(error);
              });
          })
          .catch((error) => {
            console.error("Error uploading file:", error);
            reject(error);
          });
      } else {
        console.error("No file selected.");
        reject(new Error("No file selected."));
      }
    });
  };

  const handleAddPharmacy = async (values: FormValues) => {
    try {
      const nigdFikadURL = await handleUpload(values.nigdFikad);
      const pharmacyLicenseURL = await handleUpload(values.pharmacyLicense);
      const updatedData = {
        ...values,
        nigdFikad: nigdFikadURL,
        pharmacyLicense: pharmacyLicenseURL,
      }; 
      dispatch(actions.addPharmacy(updatedData))
       console.log("handleAddPharmacy",  updatedData );
    } catch (error) {
      console.log("handleAddPharmacy--error", error);
    }

  
  };

  return (
    <>
      <AddParmacyComponent
        initialValues={initialValues}
        errorMessage={""}
        handleAddpharmacy={handleAddPharmacy}
      />
      ;
    </>
  );
};

export default AddPharmacyPage;
