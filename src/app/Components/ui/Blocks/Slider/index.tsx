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
import { BoxProps } from '../Basics/types';

export const Slider = styled.div<BoxProps>`
  overflow: hidden;
  /* height: calc(100vh - 190px); */

  .rec-slider-container {
    /* border-radius: 13px; */
  }

  .rec-dot,
  .rec-dot:focus {
    background-color: white;
    opacity: 0.3;
    width: 8px;
    height: 8px;
    box-shadow: 1px 1px 2px rgb(0 0 0 / 90%);
  }

  .rec-dot_active,
  .rec-dot:hover {
    background-color: white;
    opacity: 1;
    box-shadow: 1px 1px 2px rgb(0 0 0 / 90%);
  }

  .rec-pagination {
    position: absolute;
    top: calc(100vh - 120px);
  }

  ${compose(space, color, layout, grid, background, border, position, shadow)};
`;
export const StyledLoginCarouselItem = styled.div`
  position: relative;
  height: calc(100vh - 120px);
  width: 100%;
  img {
    height: calc(100vh - 40px);
    width: 100%;
    object-fit: cover;
    position: absolute;
  }
`;
