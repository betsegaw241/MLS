import React from 'react';
import { SelectProps } from './type';
import { ErrorMessage } from 'formik';
import { Flex, Text } from '../';
import { Selector } from '../Selectors';
import { theme } from '../../../../../styles/theme';
function Select(props: SelectProps) {
  const { options } = props;

  return (
    <Flex flexDirection={'column'} width={'100%'} alignItems={'flex-start'}>
      <Text
        fontFamily={'poppins'}
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
        height={'40px'}
        id={props.name}
        name={props.name}
        onChange={props.onChange}
        type={props.type}
        value={props.value} 
        width={'100%'}
        
      >
        <option value="" disabled hidden >
          Select an option
        </option>
        {options.map(option => (
          <option key={Date.now()} value={option}>
            {option}
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
        {/* <ErrorMessage name={props.name} /> */}
      </Text>
    </Flex>
  );
}

export default Select;
