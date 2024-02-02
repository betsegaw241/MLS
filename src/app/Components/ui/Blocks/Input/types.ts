import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import React from 'react';
import {
  BorderProps,
  BorderRadiusProps,
  FontSizeProps,
  FontWeightProps,
  SpaceProps,
  LineHeightProps,
  FontFamilyProps,
  BoxShadowProps,
  FlexBasisProps,
  FontStyleProps,
  FlexProps,
  BackgroundProps,
} from 'styled-system';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    BorderProps,
    BorderRadiusProps,
    FontStyleProps,
    SpaceProps,
    FontFamilyProps,
    FontSizeProps,
    FontWeightProps,
    LineHeightProps,
    FlexProps,
    FlexBasisProps,
    BackgroundProps,
    BoxShadowProps {
      icon?:ReactJSXElement;
      haveLeftIcon?:ReactJSXElement;
      onIconClick?: () => void;

     
    }

export interface TextAreaProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    BorderProps,
    BorderRadiusProps,
    SpaceProps,
    FontFamilyProps,
    LineHeightProps,
    FontSizeProps,
    FontWeightProps,
    BackgroundProps,
    BoxShadowProps {
      as?:string;
    }
export interface InputFileProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    BorderProps,
    BorderRadiusProps,
    SpaceProps,
    FontFamilyProps,
    LineHeightProps,
    FontSizeProps,
    FontWeightProps,
    BoxShadowProps {}
