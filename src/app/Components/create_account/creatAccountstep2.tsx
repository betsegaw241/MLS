// import { ErrorMessage, Form, Formik } from "formik";
// import { Button, Flex, Text } from "../ui/Blocks";
// import { InputField } from "../ui/InputComponent";
// import { CreateAccountComponentProp } from "./types";
// import MapComponent from "../ui/MapComponent";
// import { theme } from "../../../styles/theme";

// const CreateAccountStep2 = (props: CreateAccountComponentProp) => {
//   return (
//     <Flex
//       width="100%"
//       height="100%"
//       justifyContent="center"
//       alignItems="center"
//       paddingY={2}
//       backgroundColor={theme.colors.light.white[0]}
//     >
//       <Formik
//         initialValues={
//           props.set2Data ? props.set2Data : props.pharmacyItialValues
//         }
//         onSubmit={(values) => {
//           props.handleStep2(values);
//         }}
//         validationSchema={props.createAccountSchemaStep2}
//       >
//         {({ handleSubmit, setFieldValue }) => {
//           const handleMapClick = (position: any[]) => {
//             const locationString = `${position[0]},${position[1]}`;
//             setFieldValue("pharmacyLocation", locationString);
//           };

//           return (
//             <Form>
//               <Flex
//                 flexDirection="column"
//                 mt={5}

//                 marginX={"2px"}
//                 width={["100%", "700px"]}
//                 borderRadius={"8px"}
//               >
//                 <InputField
//                   name="pharmacyName"
//                   type="text"
//                   label="Pharmacy Name"
//                 />
//                 <InputField
//                   name="pharmacyEmailAddress"
//                   type="text"
//                   label="Pharmacy Email"
//                 />
//                 <InputField
//                   name="pharmacyPhoneNumber"
//                   type=""
//                   label="Pharmacy Phone Number"
//                 />
//                 <Text>Select Pharmacy Location</Text>
//                 <Flex padding={"0px"} paddingTop={"5px"}>
//                   <MapComponent
//                     onMapClick={handleMapClick}
//                     position={
//                       props.set2Data ? props.set2Data.pharmacyLocation : null
//                     }
//                   />
//                 </Flex>
//                 <Text
//                   color={"red"}
//                   fontFamily={"poppins"}
//                   fontSize={"12px"}
//                   p={1}
//                 >
//                   <ErrorMessage name="pharmacyLocation" />
//                 </Text>
//                 <Flex justifyContent="space-between" alignItems="center">
//                   <Button
//                     borderRadius={40}
//                     fontWeight="bold"
//                     fontFamily="poppins"
//                     color="white"
//                     fontSize={2}
//                     my={2}
//                     variant="neuteral"
//                     onClick={() => {
//                       props.back();
//                     }}
//                     padding={1}
//                     width={"200px"}
//                     type="button"
//                   >
//                     back
//                   </Button>
//                   <Button
//                     borderRadius={40}
//                     fontWeight="bold"
//                     border={"1px solod #000"}
//                     fontFamily="poppins"
//                     color="white"
//                     fontSize={2}
//                     my={2}
//                     variant="primary"
//                     onClick={() => {
//                       handleSubmit();
//                     }}
//                     type="button"
//                     padding={1}
//                     width={"200px"}
//                   >
//                     Next
//                   </Button>
//                 </Flex>
//               </Flex>
//             </Form>
//           );
//         }}
//       </Formik>
//     </Flex>
//   );
// };

// export default CreateAccountStep2;
export {};
