import * as React from 'react'; 
import { Theme, useTheme } from '@mui/material/styles'; 
import Box from '@mui/material/Box'; 
import OutlinedInput from '@mui/material/OutlinedInput'; 
import InputLabel from '@mui/material/InputLabel'; 
import MenuItem from '@mui/material/MenuItem'; 
import FormControl from '@mui/material/FormControl'; 
import Select, { SelectChangeEvent } from '@mui/material/Select'; 
import Chip from '@mui/material/Chip'; 
import { useState } from 'react'; 
 
const ITEM_HEIGHT = 48; 
const ITEM_PADDING_TOP = 8; 
const MenuProps = { 
  PaperProps: { 
    style: { 
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP, 
      width: 250, 
    }, 
  }, 
}; 
 
const names = [ 
  'Oliver Hansen', 
  'Van Henry', 
  'April Tucker', 
  'Ralph Hubbard', 
  'Omar Alexander', 
  'Carlos Abbott', 
  'Miriam Wagner', 
  'Bradley Wilkerson', 
  'Virginia Andrews', 
  'Kelly Snyder', 
]; 
 
function getStyles(name: string, personName: readonly string[], theme: Theme) { 
  return { 
    fontWeight: 
      personName.indexOf(name) === -1 
        ? theme.typography.fontWeightRegular 
        : theme.typography.fontWeightMedium, 
  }; 
} 
 
export default function MultipleSelectChip() { 
  const [drugName, setDrugName] = useState<string>(); 
  const [open, setOpen] = useState(false); 
 
  const handleChange = (event: SelectChangeEvent<typeof drugName>) => { 
    const { 
      target: { value }, 
    } = event; 
 
    setDrugName(value); 
    setOpen(false); 
  }; 
 
  return ( 
    <div> 
      <FormControl sx={{ m: 1, width: 300 }}> 
        <InputLabel id="demo-single-chip-label">Select Drug</InputLabel> 
        <Select 
          labelId="demo-single-chip-label" 
          id="demo-single-chip" 
          value={drugName} 
          onChange={handleChange} 
          input={<OutlinedInput id="select-single-chip" label="Select Drug" />} 
          MenuProps={MenuProps} 
        > 
          {names.map((name) => ( 
            <MenuItem key={name} value={name}>    
              {name} 
            </MenuItem> 
          ))} 
        </Select> 
      </FormControl> 
    </div> 
  ); 
}