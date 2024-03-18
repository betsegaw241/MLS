import { SetStateAction, useState } from "react";
import Select, { StylesConfig } from "react-select";
import { OptionType } from "./type";

const colourStyles: StylesConfig<any> = {
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      fontFamily: "poppins",
      fontSize: 15,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? "#E5E5E5"
        : isFocused
        ? "#f5f5f5"
        : undefined,

      color: isDisabled ? "#ccc" : isSelected ? "black" : data.color,

      ":active": {
        ...styles[":active"],
        borderColor: "red",
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : "#f5f5f5f"
          : undefined,
      },
    };
  },
  input: (styles) => ({
    ...styles,
    fontFamily: "poppins",
  }),
  placeholder: (styles) => ({ ...styles, fontFamily: "poppins" }),
  singleValue: (styles, { data }) => ({ ...styles, fontFamily: "poppins" }),
};


const ReactSelect = (props: any) => {
  const handleChange = (selectedOption: OptionType | null) => {
    props.setSelectedOption(selectedOption?.value);
  };
  return (
    <Select
      styles={colourStyles}
      options={props.options}
      isClearable
      onChange={handleChange}
    />
  );
};

export default ReactSelect;
