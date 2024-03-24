import { useEffect, useState } from "react";
import CreateAccount from "app/Components/create_account/indext";
import {
  documentItialValues,
  initialValues,
  pharmacyItialValues,
  userItialValues,
} from "./constants";
import {
  createAccoutSchemaStep1,
  createAccoutSchemaStep2,
  createAccoutSchemaStep3,
} from "./validators";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsAcountCreated,
  selectErrorMessage,
  selectCreating,
} from "./slice/selector";
import { useCreateAccountPageSlice } from "./slice";
import { useNavigate } from "react-router";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "utils/firebaseConfig";
import { FormValues } from "./types";

const CreateAccountPage = () => {
  const isaccountCreated = useSelector(selectIsAcountCreated);
  const creatatingAccount = useSelector(selectCreating);
  const errorMessage = useSelector(selectErrorMessage);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { actions } = useCreateAccountPageSlice();

  const [uploadingDocument, setUploadingDocument] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [data, setData] = useState<FormValues>(initialValues);
  const [set1Data, setStep1Data] = useState(null);
  const [set2Data, setStep2Data] = useState(null);
  // const [set3Data, setStep3Data] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 3;

  function onSignupClick() {
    dispatch(
      actions.createAccount({
        name: `${data.firstName} ${data.lastName}`,
        phoneNumber: data.phoneNumber,
        password: data.password,
        email: data.email,
        pharmaciestLicense: data.pharmacistLicense,
        pharmacyName: data.pharmacyName,
        pharmacyLocation: data.pharmacyLocation,
        pharmacyEmail: data.pharmacyEmailAddress,
        pharmacyPhoneNumber: data.pharmacyPhoneNumber,
        pharmacyLicense: data.pharmacyLicense,
      })
    );
  }

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

  useEffect(() => {
    if (isaccountCreated) {
      navigate(`/verifyemail`);
    }
  }, [isaccountCreated]);

  const handleNext = () => {
    if (currentStep + 1 < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleStep1 = (values: any) => {
    setData((prev) => ({ ...prev, ...values }));
    setStep1Data(values);
    handleNext();
  };

  const handleStep2 = (values: any) => {
    setData((prev) => ({ ...prev, ...values }));
    setStep2Data(values);
    handleNext();
  };

  const handleStep3 = async (values: any) => {
    try {
      setUploadingDocument(true);

      const nigdFikadURL = await handleUpload(values.nigdFikad);
      const pharmacyLicenseURL = await handleUpload(values.pharmacyLicense);
      const pharmacistLicenseURL = await handleUpload(values.pharmacistLicense);

      if (
        nigdFikadURL === null ||
        pharmacyLicenseURL === null ||
        pharmacistLicenseURL === null
      ) {
        console.error("Error uploading files: One or more documents are null");
        return;
      }

      const updatedData = {
        ...values,
        nigdFikad: nigdFikadURL,
        pharmacistLicense: pharmacistLicenseURL,
        pharmacyLicense: pharmacyLicenseURL, // Corrected property name
      };

      setUploadingDocument(false);
      setData((prev) => ({ ...prev, ...updatedData }));

      if (
        updatedData.nigdFikad !== "" &&
        updatedData.pharmacistLicense !== "" &&
        updatedData.pharmacyLicense !== ""
      ) {
        setIsUploaded(!isUploaded);
      }
    } catch (error) {
      setUploadingDocument(false);
      console.error("Error uploading files:", error);
    }
  };

  return (
    <>
      <CreateAccount
        createAccountSchemaStep1={createAccoutSchemaStep1}
        createAccountSchemaStep2={createAccoutSchemaStep2}
        createAccountSchemaStep3={createAccoutSchemaStep3}
        errorMessage={errorMessage}
        initialValues={initialValues}
        pharmacyItialValues={pharmacyItialValues}
        documentItialValues={documentItialValues}
        userItialValues={userItialValues}
        handleStep1={handleStep1}
        handleStep2={handleStep2}
        handleStep3={handleStep3}
        onSignupClick={onSignupClick}
        currentStep={currentStep}
        back={handlePrevStep}
        set1Data={set1Data}
        set2Data={set2Data}
        UploadingDocument={uploadingDocument}
        isUploading={uploadingDocument}
        isUploaded={isUploaded}
        creatingAccount={creatatingAccount}
      />
    </>
  );
};

export default CreateAccountPage;
