// import { Form, Formik } from "formik";
// import { Flex } from "../ui/Blocks";
// import { InputField } from "../ui/InputComponent";
// import { EditSchema } from "app/Pages/ProfilePage/validators";
// import { initialValues } from "app/Pages/ProfilePage/constants";

// const EditProfile = () => {
//   <Formik
//     initialValues={initialValues}
//     onSubmit={() => {}}
//     validationSchema={EditSchema}
//   >
//     {({}) => {
//       return (
//         <Form>
//           <Flex flexDirection={"column"} pt={10}>
//             <Flex style={{ gap: "20px" }}>
//               <Flex width={"100%"} flexDirection={"column"}>
//                 <InputField name={"firstName"} type={""} label="First Name" />
//               </Flex>
//               <Flex width={"100%"} flexDirection={"column"}>
//                 <InputField name={"lastName"} type={""} label="Last Name" />
//               </Flex>
//             </Flex>
//             <InputField name={"email"} type={""} label="Email" />
//           </Flex>
//         </Form>
//       );
//     }}
//   </Formik>;
// };
// export default EditProfile;
