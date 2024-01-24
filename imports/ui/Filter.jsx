import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Filter({ label, options, selectedValue, setSelectedValue, resetFilters, darkMode }) {

  const handleChange = (event) => {
    setSelectedValue(event.target.value, resetFilters())
  };

  return (
    <FormControl sx={{ m: 0.5, minWidth: 120 }} size='small'>
      <InputLabel id='demo-select-small-label'>{label}</InputLabel>
      <Select
        labelId='filter-value'
        id='filter-value'
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
