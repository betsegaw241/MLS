export type SelectProps = {
  handleChange?: () => void;
  name: string;
  type: string;
  lable: string;
  value: string;
  onChange?: (e: any) => void;
  options: string[];
};
export type OptionType = {
  value: string;
  label: string;
};
