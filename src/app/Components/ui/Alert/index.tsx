import { HiInformationCircle } from "react-icons/hi";
import { Flex, Text } from "../Blocks";

const CustomAlert = (props: any) => {
  return (
    <Flex
      background={"rgba(255, 0, 0, 0.1)"}
      p={1}
      borderRadius={1}
      alignItems={"center"}
      style={{ gap: 5 }}
    >
      <HiInformationCircle color="red" />
      <Text fontFamily={"poppins"} color={"red"} fontSize={2}>
        {props.message}
      </Text>
    </Flex>
  );
};

export default CustomAlert;
