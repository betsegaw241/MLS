import styled from 'styled-components';
import {
  color,
  compose,
  fontFamily,
  fontStyle,
  fontSize,
  fontWeight,
  layout,
  lineHeight,
  space,
  textAlign,
  position,
  variant,
  border,
  borderRadius,
  borderWidth,
  borderStyle,
} from 'styled-system';
import { TextProps } from './types';

export const Text = styled.span<TextProps>`
  &:hover {
    ${props => props.hover}
  }
  display: inline-block;
  ${compose(
    color,
    fontFamily,
    fontSize,
    fontWeight,
    fontStyle,
    color,
    textAlign,
    space,
    lineHeight,
    position,
    space,
    layout,
    border,
    borderRadius,
    borderWidth,
    borderStyle,
    variant({
      variants: {
        default: {},
        small: {},
        error: {
          color: 'red',
          fontSize: '13px',
        },
        multiLineEllipsis: {
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 3,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        ellipsis: {
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        },
      },
    }),
  )}
`;

export const H1 = styled.h1<TextProps>`
  font-family: ''
    ${compose(
      fontSize,
      fontWeight,
      color,
      textAlign,
      space,
      lineHeight,
      space,
      layout,
      fontFamily,
    )};
`;
export const H2 = styled.h2<TextProps>`
  ${compose(
    fontSize,
    fontWeight,
    color,
    textAlign,
    space,
    lineHeight,
    space,
    layout,
    fontFamily,
  )}
`;
export const H3 = styled.h3<TextProps>`
  ${compose(
    fontSize,
    fontWeight,
    color,
    textAlign,
    space,
    lineHeight,
    space,
    layout,
    fontFamily,
  )}
`;
export const H4 = styled.h4<TextProps>`
  ${compose(
    fontSize,
    fontWeight,
    color,
    textAlign,
    space,
    lineHeight,
    space,
    layout,
    fontFamily,
  )}
`;
export const H5 = styled.h5<TextProps>`
  ${compose(
    fontSize,
    fontWeight,
    color,
    textAlign,
    space,
    lineHeight,
    space,
    layout,
    fontFamily,
  )}
`;
export const H6 = styled.h6<TextProps>`
  ${compose(
    fontSize,
    fontWeight,
    color,
    textAlign,
    space,
    lineHeight,
    space,
    layout,
    fontFamily,
  )}
`;

export const P = styled.p<TextProps>`
  ${compose(
    fontSize,
    fontWeight,
    color,
    textAlign,
    space,
    lineHeight,
    space,
    layout,
    fontFamily,
  )}
`;
