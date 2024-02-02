import styled from 'styled-components';
import { InputFieldProp } from './types';
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
  color,
} from 'styled-system';

import { Field } from 'formik';

export const InputFields = styled(Field)<InputFieldProp>`
  border: none;
  outline: none;
  resize: none;
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
    color,
  )}
`;
