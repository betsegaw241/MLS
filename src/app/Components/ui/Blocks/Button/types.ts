import {
  BackgroundProps,
  BorderProps,
  BorderRadiusProps,
  BorderStyleProps,
  BorderWidthProps,
  BoxShadowProps,
  ColorProps,
  FontSizeProps,
  FontWeightProps,
  LayoutProps,
  OpacityProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

export type variant = 'primary' | 'secondary' | 'warning' | 'success' | 'login';

export interface ButtonProps
  extends SpaceProps,
    LayoutProps,
    BorderProps,
    BorderRadiusProps,
    BorderStyleProps,
    SpaceProps,
    PositionProps,
    OpacityProps,
    BackgroundProps,
    FontSizeProps,
    FontWeightProps,
    ShadowProps,
    BoxShadowProps,
    ColorProps,
    TypographyProps,
    BorderWidthProps {
  variant?: variant;
}
