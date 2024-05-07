import styled from 'styled-components';
import { Box } from './Box';
import {
  boxShadow,
  flexbox,
  compose,
  flex,
  layout,
  space,
  typography,
  border,
  position,
  borderRadius,
} from 'styled-system';
import { FlexProps } from './types';

export const Container = styled(Box)<FlexProps>`
  display: flex;
  background: ${({ theme }) => (theme === "dark" ? "#121212" : "#ffff")};
  ${compose(
    flexbox,
    flex,
    space,
    layout,
    typography,
    border,
    position,
    borderRadius,
    boxShadow,
  )};
`;

