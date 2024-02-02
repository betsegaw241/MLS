import styled from 'styled-components';
import {
  space,
  color,
  layout,
  grid,
  background,
  border,
  position,
  shadow,
  compose,
} from 'styled-system';
import { BoxProps } from './types';

export const Box = styled.div<BoxProps>`
  &::-webkit-scrollbar {
    width: 1px;
    scroll-behavior: smooth;

  }
 
  &::-webkit-scrollbar:horizontal {
    /* height: 5px;
    scroll-behavior: smooth; */
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: white;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  &:hover {
    ${props => props.hover}
  }
  ${compose(space, color, layout, grid, background, border, position, shadow)};
`;
