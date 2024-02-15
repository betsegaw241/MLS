import { Text, Flex } from "../../Blocks/";
import { checkboxProps } from "./types";
import {InputField} from "./InputFiled";


function CheckBox(props: checkboxProps) {

  const { label, clicked,show } = props;
   

  return (
    <Flex alignItems={"center"}>
      <InputField type="checkbox" onClick={clicked} checked={show} />
      <Text fontFamily={"poppins"} fontSize={'12px'}>{label}</Text>
    </Flex>
  );
}

export default CheckBox;
