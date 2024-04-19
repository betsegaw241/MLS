import {
  FormControl,
  MenuItem,
  Select,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useState } from "react";
import { IDropdownProps } from "./types";

const Dropdown = ({ options, label, handleChange }: IDropdownProps) => {
  const [role, setRole] = useState("");

  const setSetvalue = (event: any) => {
    setRole(event.target.value);
    handleChange && handleChange(event.target.value);
  };

  return (
    <FormControl>
      <Select
        sx={{
          boxShadow: "none",
          fontFamily: "poppins",
          ".MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
        value={role}
        onChange={setSetvalue}
        displayEmpty
        inputProps={{ "aria-label": "Role" }}
      >
        <MenuItem value="" sx={{ fontFamily: "poppins" }}>
          <em>{label}</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem
            sx={{ fontFamily: "poppins" }}
            key={option.value}
            value={option.value}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default Dropdown;
