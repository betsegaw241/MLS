
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
    
export interface checkboxProps {
  label: string;
  show:boolean;
  clicked: () => void;
}