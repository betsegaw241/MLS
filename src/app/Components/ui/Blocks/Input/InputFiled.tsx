import styled from 'styled-components';
import { Field } from 'formik';
import {
  compose,
  border,
  borderRadius,
  color,
  fontSize,
  fontWeight,
  layout,
  space,
  lineHeight,
  fontFamily,
  boxShadow,
  flexbox,
  flex,
  background
} from 'styled-system';
import { theme } from 'styles/theme';
import { InputProps, TextAreaProps } from './types';

export const InputField = styled(Field)<InputProps>`
  border: none;
  font-size: ${theme.fontSizes[5]};
  line-height: ${theme.lineHeights[2]};
  background-color:'transparent';
  
  &:focus {
    outline: none;
  
 
  }
  ${compose(
    border,
    borderRadius,
    color,
    fontSize,
    fontWeight,
    layout,
    space,
    lineHeight,
    fontFamily,
    boxShadow,
    flexbox,
    flex,
    background
  )};
`;
export const TextAreaField = styled(Field)<TextAreaProps>`
  
  border: none;
  font-size: ${theme.fontSizes[5]};
  line-height: ${theme.lineHeights[2]};
  &:focus {
    outline: none;
 
  }
  ${compose(
    border,
    borderRadius,
    color,
    fontSize,
    fontWeight,
    layout,
    space,
    lineHeight,
    fontFamily,
    boxShadow,
    flexbox,
    flex,
    background
  )};
`;
