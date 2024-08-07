import React from 'react';
import {
  SpaceProps,
  BordersProps,
  BorderRadiusProps,
  FontSizeProps,
  FontFamilyProps,
  BoxShadowProps,
  FontWeightProps,
  LineHeightProps,
  FlexboxProps,
  BackgroundProps,
} from 'styled-system';

export interface InputFieldProp
  extends React.InputHTMLAttributes<HTMLInputElement>,
    SpaceProps,
    BordersProps,
    FontSizeProps,
    BorderRadiusProps,
    FontFamilyProps,
    BoxShadowProps,
    FontWeightProps,
    FlexboxProps,
    LineHeightProps,
    BackgroundProps {
  children: React.ReactNode;
  as: string;
}
export interface checkboxProps {
  label: string;
  show: boolean;
  clicked: () => void;
}