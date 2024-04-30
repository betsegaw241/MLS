import { useEffect, useState } from "react";
import { feedbackSchema } from "./validators";
import { useDispatch, useSelector } from "react-redux";
import {
  selectErrorMessage,
  selectProfile,
} from "app/Pages/PharmacistFeedbackPage/slice/selector";
import ProfileComponent from "app/Components/ProfileComponent";
import { useEditProfilePageSlice } from "./slice";
import { IFeedback } from "./slice/types";
import UserInfo from "app/Components/layouts/Header/userInfo";

function PharmacistFeedbackPage() {
  const feedback = useSelector(selectFeedback);
  const [data, setData] = useState<IFeedback>(feedback);
  const errorMessage = useSelector(selectErrorMessage);
  const { actions } = useFeedbackPageSlice();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getUser(userID));
  }, []);

  async function onSaveClick(values: IFeedback): Promise<void> {
    if (selectedFile) {
      const avatar = await handleUpload(selectedFile);
      setImage(avatar);

      dispatch(
        actions.editProfile({
          user: {
            phoneNumber: values.phone,
            avatar: avatar,
          },
          id: userID,
        })
      );
    } else {
      dispatch(
        actions.editProfile({
          user: {
            phoneNumber: values.phone,
          },
          id: userID,
        })
      );
    }
  }

  return (
    <>
        <UserInfo
          errorMessage={errorMessage}
         initialValues={feedback}
          feedbackSchema={feedbackSchema}
          onSaveClick={onSaveClick}
        />
    </>
  );
}

export default PharmacistFeedbackPage;
