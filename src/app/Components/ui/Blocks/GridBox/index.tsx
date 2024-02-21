import { Flex, Text } from '../index';
import { IDetail } from './types';

export const GridBox = (props: IDetail) => {
  return (
    <Flex flexDirection={'column'} style={{ gap: '5px' }}>
      <Text fontFamily={'poppins'} color={'#0f172a'} fontSize={3} fontWeight={4}>
        {props.lable}
      </Text>
      <Text
        color={'#3d3939'}
       
        fontSize={3}
        fontWeight={3}
        lineHeight={6}
      >
        {props.value?props.value:' - '}
      </Text>
    </Flex>
  );
};
