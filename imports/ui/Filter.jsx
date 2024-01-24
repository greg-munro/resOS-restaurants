import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Filter({ label, options, selectedValue, setSelectedValue  }) {
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl sx={{ m: 0.5, minWidth: 120 }} size='small'>
      <InputLabel id='demo-select-small-label'>{label}</InputLabel>
      <Select
        labelId='demo-select-small-label'
        id='demo-select-small'
        value={selectedValue}
        label={label}
        onChange={handleChange}
      >
        {options &&
          options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}
