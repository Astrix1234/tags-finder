import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { ChangeEvent } from 'react';
import store from '../../Zustand/store';

interface InputProps {
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  label: string;
  defaultValue: string;
  options: string[];
}

export default function NativeSelectInput({
  handleChange,
  label,
  defaultValue,
  options,
}: InputProps) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          {label}
        </InputLabel>
        <NativeSelect
          defaultValue={defaultValue}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
          onChange={handleChange}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
