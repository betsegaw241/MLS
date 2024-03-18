import React from "react";

export type InputProps = {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  value?: string;
  topIconlabel?: string;
  topIcon?: React.ReactNode;
  onIconClick?: () => void;
  date?: () => void;
};
