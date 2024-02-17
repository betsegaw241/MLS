import { Form, Formik} from "formik";
import { Flex } from "../ui/Blocks";
import { InputField } from "../ui/InputComponent";
import { initialValues } from "../create_account/types";
import { signupSchema } from "app/Pages/createAccountPage/validators";




const EditProfile = () => {

    <Formik
      initialValues={initialValues}
      onSubmit={() => {
      }}
      validationSchema={signupSchema}
    >
      {({ }) => {
        return (
          <Form>
            <Flex flexDirection={"column"} pt={10}>
              <Flex style={{ gap: "20px" }}>
                <Flex width={"100%"} flexDirection={"column"}>
                  <InputField name={"firstName"} type={""} label="First Name" />
                </Flex>
                <Flex width={"100%"} flexDirection={"column"}>
                  <InputField name={"lastName"} type={""} label="Last Name" />
                </Flex>
              </Flex>
              <InputField name={"email"} type={""} label="Email" />
              
          
            </Flex>
          </Form>
        );
      }}
    </Formik>;
};
export default EditProfile;
