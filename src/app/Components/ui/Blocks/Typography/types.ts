import { CSSProp } from 'styled-components';
import {
  ColorProps,
  FontSizeProps,
  FontWeightProps,
  FontFamilyProps,
  FontStyleProps,
  LineHeightProps,
  TextAlignProps,
  SpaceProps,
  LayoutProps,
  PositionProps,
  BorderProps,
  BorderRadiusProps,
  BorderWidthProps,
  BorderStyleProps,
} from 'styled-system';

type TextVariants =
  | 'default'
  | 'small'
  | 'error'
  | 'multiLineEllipsis'
  | 'ellipsis';

export interface TextProps
  extends FontSizeProps,
    FontWeightProps,
    FontFamilyProps,
    FontStyleProps,
    ColorProps,
    LayoutProps,
    SpaceProps,
    TextAlignProps,
    LineHeightProps,
    SpaceProps,
    PositionProps,
    BorderProps,
    BorderRadiusProps,
    BorderWidthProps,
    BorderStyleProps {
  variant?: TextVariants;
  hover?: CSSProp;
}
