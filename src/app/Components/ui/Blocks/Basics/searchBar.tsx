import styled from "styled-components";
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
} from "styled-system";

export const SearchBar = styled.input`
  &::-webkit-scrollbar {
    width: 1px;
    scroll-behavior: smooth;
  }

  &::-webkit-scrollbar:horizontal {
    
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
    /* Add any hover styling if needed */
  }

  /* Add additional styling properties using styled-system utility functions */
  ${compose(space, color, layout, grid, background, border, position, shadow)}
`;
