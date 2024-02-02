import styled from 'styled-components';
import { ButtonProps } from './types';
import {
  background,
  borderColor,
  borderRadius,
  borderStyle,
  borderWidth,
  boxShadow,
  color,
  compose,
  fontSize,
  fontWeight,
  layout,
  opacity,
  position,
  shadow,
  space,
  textAlign,
  variant,
} from 'styled-system';

export const Button = styled('button')<ButtonProps>`
  outline: none;
  border: none;
color:white,
  border-radius: 4px;
 
  font-size: 16px;
  box-sizing: border-box;
cursor:pointer ;
  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    opacity: 0.9;
  }

  ${compose(
    color,
    borderRadius,
    borderWidth,
    borderColor,
    borderStyle,
    fontSize,
    fontWeight,
    opacity,
    background,
    shadow,
    layout,
    space,
    textAlign,
    position,
    boxShadow,

    variant({
      variants: {
        primary: {
          bg: '#065AD8',
          color: '#ffffff',
        },
        secondary: {
          color: '#ffffff',
          bg: '#065AD8',
        },
        warning: {
          color: '#ffffff',
          bg: '#cc3300',
        },
        success: {
          color: '#ffffff',
          bg: '4CAF50',
        },
      },
    }),
  )}
`;

export default Button;
