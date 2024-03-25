import { InputProps } from "./type";
import { ErrorMessage } from "formik";
import { Text } from "../Blocks/Text/Text";
import { Input, TextAreaInput } from "../Blocks/Input";
import { InputFields } from "../Blocks/InputField";
import { theme } from "../../../../styles/theme";
import { Flex } from "../Blocks";
import "../../../../styles/fonts.css";
function InputField(props: InputProps) {
  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text
          fontFamily={"poppins"}
          fontSize={"16px"}
          lineHeight="18px"
          textAlign={"center"}
        >
          {props.label}
        </Text>
        <Flex
          onClick={props.onIconClick}
          style={{ cursor: "pointer" }}
          padding={"0px"}
          margin={"0px"}
          flexDirection={"row"}
          alignItems={"center"}
        >
          <Flex>{props.topIcon && props.topIcon}</Flex>

          <Text
            fontFamily={"poppins"}
            fontSize={"12px"}
            fontWeight={2}
            lineHeight="18px"
            textAlign={"center"}
            ml={"2px"}
          >
            {props.topIcon && props.topIconlabel}
          </Text>
        </Flex>
      </Flex>

      {props.type === "textarea" ? (
        <InputFields name={props.name}>
          {(props: any) => {
            return (
              <>
                <TextAreaInput
                  {...props.field}
                  border={`1px solid ${theme.colors.light.black[12]}`}
                  p={1}
                  borderRadius={1}
                  height="93px"
                  id={props.name}
                  type="text"
                  width="100%"
                />
              </>
            );
          }}
        </InputFields>
      ) : props.type == "date" ? (
        <InputFields name={props.name}>
          {(props: any) => {
            return (
              <>
                <Input
                  {...props.field}
                  border={`1px solid ${theme.colors.light.black[12]}`}
                  borderRadius={1}
                  p={1}
                  id={props.name}
                  type="date"
                  width="100%"
                />
              </>
            );
          }}
        </InputFields>
      ) : (
        <InputFields
          border={`1px solid ${theme.colors.light.black[12]}`}
          fontSize={"13px"}
          height={"35px"}
          id={props.name}
          name={props.name}
          placeholder={props.placeholder}
          required
          type={props.type}
          width="100%"
          fontFamily={"poppins"}
        />
      )}
      <Text
        color="red"
        fontFamily={"poppins"}
        fontSize={"12px"}
        fontWeight={3}
        paddingTop={"5px"}
      >
        <ErrorMessage name={props.name} />
      </Text>
    </>
  );
}

export default InputField;
