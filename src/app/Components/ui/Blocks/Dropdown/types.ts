export interface IDropdownProps {
options:Option[],
label:string;
handleChange?: (value: string) => void;
}

interface Option {
  label: string;
  value: string;
}
