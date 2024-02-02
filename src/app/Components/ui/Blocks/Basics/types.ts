import { CSSProp } from 'styled-components';
import {
  FlexboxProps,
  SpaceProps,
  ColorProps,
  LayoutProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
  ShadowProps,
  GridProps,
  BoxShadowProps,
  
} from 'styled-system';

// Box Props
export interface BoxProps
  extends SpaceProps,
    ColorProps,
 
    FlexboxProps,
    LayoutProps,
    GridProp,
    BackgroundProps,
    BorderProps,
    PositionProps,
    BoxShadowProps,
   
    ShadowProps {
  onClick?: () => void;
   hover?: CSSProp;
}
// Flex Box Props
export interface FlexProps extends FlexboxProps {}
export interface GridProp extends GridProps {}
type GlassBackgroundVariants = 'light' | 'dark';

export interface GlassBackgroundProps extends BoxProps, FlexProps {
  variant?: GlassBackgroundVariants;

  blurIndex?: number;
}

export interface GradientBackgroundProps extends BoxProps, FlexProps {}
