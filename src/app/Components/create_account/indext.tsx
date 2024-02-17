import { CreateAccountComponentProp } from "./types";
import CreateAccountStep1 from "./creatAccountstep1";
import { Box, Flex, Text } from "../ui/Blocks";
import CreateAccountStep2 from "./creatAccountstep2";
import CreateAccountStep3 from "./creatAccountstep3";
import { theme } from "../../../styles/theme";

const CreateAccount = (props: CreateAccountComponentProp) => {
  const steps = [
    <CreateAccountStep1 {...props} />,
    <CreateAccountStep2 {...props} />,
    <CreateAccountStep3 {...props} />,
  ];

  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"flex-start"}
      width={"100%"}
      height={"100vh"}
      margin={"0px"}
      left={"0px"}
      top={"0px"}
      style={{ gap: "3px" }}
      backgroundColor={theme.colors.light.white[0]}
    >
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        backgroundColor={theme.colors.light.white[13]}
        borderBottom={"2px solid #9DA7BC"}
        height={"100px"}
        top={"0px"}
        right={"0px"}
        width={"100%"}
        position={"fixed"}
      >
        <Text p={1} fontFamily={"poppins"} fontSize={6}>
          Register your pharmacy
        </Text>
        <Flex style={{ gap: "20px" }} padding={1}>
          <Flex
            backgroundColor={
              props.currentStep == 0
                ? theme.colors.light.secondary[2]
                : theme.colors.light.white[2]
            }
            borderRadius={"50%"}
            width={"20px"}
            height={"20px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text
              textAlign={"center"}
              fontSize={2}
              color={props.currentStep == 0 ? "#FFF" : ""}
            >
              1
            </Text>
          </Flex>
          <Flex
            backgroundColor={
              props.currentStep == 1
                ? theme.colors.light.secondary[2]
                : theme.colors.light.white[2]
            }
            borderRadius={"50%"}
            width={"20px"}
            height={"20px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text fontSize={2} color={props.currentStep == 1 ? "#FFF" : ""}>
              2
            </Text>
          </Flex>
          <Flex
            backgroundColor={
              props.currentStep == 2
                ? theme.colors.light.secondary[2]
                : theme.colors.light.white[2]
            }
            borderRadius={"50%"}
            width={"20px"}
            height={"20px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text fontSize={2} color={props.currentStep == 2 ? "#FFF" : ""}>
              3
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Box paddingTop={"100px"} >{steps[props.currentStep]}</Box>
    </Flex>
  );
};
export default CreateAccount;
