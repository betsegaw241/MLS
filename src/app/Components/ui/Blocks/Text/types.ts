import { ReactNode } from 'react';
import {
   FontWeightProps,
   FontSizeProps,
   FontFamilyProps,
   ColorProps,
   BackgroundProps,
   LayoutProps,
   SizeProps,
   TextAlignProps,
   SpaceProps,
   LineHeightProps,
   ShadowProps
  } from 'styled-system';
  
  // Text Props
  export interface TextProps
    extends  FontFamilyProps,
    ShadowProps,
    FontSizeProps,
    FontWeightProps,
    ColorProps,
    BackgroundProps,
    LayoutProps,
    SizeProps,
    TextAlignProps,
    SpaceProps,
    LineHeightProps
    {
      children: ReactNode | any,
    }
  

  