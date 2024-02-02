import React from 'react';
import { ModalComponentProps } from './types';
import { Box, Flex } from '../Blocks/Basics';

function Modal(props: ModalComponentProps) {
  return (
    <Flex
      alignItems={'center'}
      backgroundColor={'#0000004D'}
      bottom={'0px'}
      display={props.open ? 'flex' : 'none'}
      height={'100vh'}
      justifyContent={'center'}
      left={'0px'}
      position={'fixed'}
      top={props.top ? props.top : '0px'}
      width={'100vw'}
      zIndex={'7000'}
    >
      <Box
        height={'100vh'}
        left="0px"
        onClick={props.setOpen}
        position={'absolute'}
        top={'0px'}
        width={'100vw'}
      />
      {props.open ? props.children : <></>}
    </Flex>
  );
}

export default Modal;
