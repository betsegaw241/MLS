import { Text, Flex } from "..";
import { checkboxProps } from "./types";
import {InputField} from "../Input/InputFiled";


function CheckBox(props: checkboxProps) {

  const { label, clicked,show } = props;
   

  return (
    <Flex alignItems={"center"}>
      <InputField type="checkbox" onClick={clicked} checked={show} />
      <Text fontFamily={"poppins"}>{label}</Text>
    </Flex>
  );
}

export default CheckBox;