import React from 'react';
import { SelectProps } from './type';
import { ErrorMessage } from 'formik';
import { Text } from '../';
import { Selector } from '../Selectors';
import { theme } from 'styles/theme';
function Select(props: SelectProps) {
  const { options } = props;

  return (
    <>
      <Text
        fontFamily={'Roboto'}
        fontSize={'14px'}
        fontWeight={2}
        lineHeight="18px"
        mt="10px"
        textAlign={'center'}
      >
        {props.lable}
      </Text>
      <Selector
        as="select"
        border={`1px solid ${theme.colors.light.black[12]}`}
        borderRadius={'5px'}
        fontSize={'15px'}
        height={'50px'}
        id={props.name}
        name={props.name}
        onChange={props.onChange}
        type={props.type}
        width="100%"
        
      >
         <option ></option>
        {options.map(role => (
          <option
            key={role.value}
            selected={props.value === role.value}
            value={role.value}
          >
            {role.label}
          </option>
        ))}
      </Selector>
      <Text
        color="red"
        fontFamily={'Roboto'}
        fontSize={'12px'}
        fontWeight={3}
        paddingTop={'5px'}
      >
        <ErrorMessage name={props.name} />
      </Text>
    </>
  );
}

export default Select;
