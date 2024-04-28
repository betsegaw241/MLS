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
import { FormValues, Ipharmacist } from "./types";
import api from "../../../API/api";

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
  const [email, setemail] = useState("");

  const totalSteps = 3;
  const formData = new FormData();

  const onSignupClick = (values: any) => {
    setemail(values.email);
    formData.append("file", values.pharmacistLicense);
    formData.append("name", `${values.firstName} ${values.lastName}`);
    formData.append("phoneNumber", values.phoneNumber);
    formData.append("email", values.email);
    formData.append("password", values.password);

    dispatch(actions.createAccount(formData));
  };

  useEffect(() => {
    if (isaccountCreated) {
      navigate(`/verifyemail`, { state: { email: email } });
    }
  }, [isaccountCreated]);

  return (
    <>
      <CreateAccount
        createAccountSchemaStep1={createAccoutSchemaStep1}
        errorMessage={errorMessage}
        initialValues={initialValues}
        pharmacyItialValues={pharmacyItialValues}
        documentItialValues={documentItialValues}
        userItialValues={userItialValues}
        handleSignUp={onSignupClick}
        currentStep={currentStep}
        set1Data={set1Data}
        creatingAccount={creatatingAccount}
      />
    </>
  );
};

export default CreateAccountPage;
