import styled from 'styled-components';
import { SelectorProps } from './types';
import {
  compose,
  space,
  layout,
  border,
  borderRadius,
  fontSize,
  fontWeight,
  fontFamily,
  lineHeight,
  boxShadow,
  flexbox,
  background,
} from 'styled-system';
import { Field } from 'formik';

export const Selector = styled(Field)<SelectorProps>`
  border: none;
  outline: none;

  background-color: transparent;

  ${compose(
    space,
    layout,
    border,
    borderRadius,
    fontSize,
    fontWeight,
    fontFamily,
    lineHeight,
    boxShadow,
    flexbox,
    background,
  )}
`;
