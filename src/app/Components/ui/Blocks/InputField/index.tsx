import styled from "styled-components";
import { InputFieldProp } from "./types";
import {
  compose,
  space,
  layout,
  border,
  fontSize,
  fontWeight,
  fontFamily,
  lineHeight,
  boxShadow,
  flexbox,
  background,
  color,
} from "styled-system";

import { Field } from "formik";

export const InputFields = styled(Field)<InputFieldProp>`
  border: none;
  outline: none;
  border-radius: 8px;
  resize: none;
  ${compose(
    space,
    layout,
    border,
    fontSize,
    fontWeight,
    fontFamily,
    lineHeight,
    boxShadow,
    flexbox,
    background,
    color
  )}
`;
