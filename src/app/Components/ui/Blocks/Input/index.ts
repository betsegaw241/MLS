import { InputProps, TextAreaProps } from "./types";
import styled from "styled-components";
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
  background,
} from "styled-system";

export const Input = styled.input<InputProps>`
  box-sizing: border-box;
  :focus {
    outline: none;
    background-color: transparent;
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
    background
  )}
`;

export const TextAreaInput = styled.textarea<TextAreaProps>`
  box-sizing: border-box;z
  :focus {
    outline: none;
    background-color: transparent;
  }
  ${compose(
    background,
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
    flexbox
  )}
`;

export const FileInput = styled.input<InputProps>`
  color: ${compose(
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
    flexbox
  )};
`;
