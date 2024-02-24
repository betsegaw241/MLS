import { Flex, Text } from "../index";
import { IDetail } from "./types";

export const GridBox = (props: IDetail) => {
  return (
    <Flex flexDirection={"column"} style={{ gap: "5px" }}>
      <Text
        fontFamily={"poppins"}
        color={"#3d3939"}
        fontSize={1}
        fontWeight={4}
      >
        {props.lable}
      </Text>
      <Text
        color={"#3d3939"}
        fontFamily={"poppins"}
        fontSize={5}
        fontWeight={3}
        lineHeight={6}
      >
        {props.value ? props.value : " - "}
      </Text>
    </Flex>
  );
};
