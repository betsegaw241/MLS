import React from 'react';
import { Box, Flex } from '../Basics';
import { InputProps } from './types';
import { InputField } from './InputFiled';

function InputForm(props: InputProps) {
  const { haveLeftIcon, icon, onIconClick, ...rest } = props;
  return (
    <Flex
      alignItems={'center'}
      backgroundColor={'light.white.12'}
      borderRadius={0}
      p={1}
      position={'relative'}
      style={{ gap: '10px'}}
    >
      {icon}
      <InputField
        backgroundColor={'light.white.12'}
        border={'none'}
        width={'100%'}
        {...rest}
        style={{ backgroundColor:'transparent' }}
     
      />
      <Box
        onClick={onIconClick}
        position={'absolute'}
        right={2}
        style={{ cursor: 'pointer' }}
        top={'10px'}
      >
        {haveLeftIcon && haveLeftIcon}
      </Box>
    </Flex>
  );
}

export default InputForm;
