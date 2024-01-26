import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Filter({
  label,
  options,
  selectedValue,
  setSelectedValue,
  resetFilters,
}) {
  const handleChange = (event) => {
    setSelectedValue(event.target.value, resetFilters());
  };

  return (
    <FormControl sx={{ m: 0.5, minWidth: 120 }} size='small'>
      <InputLabel id='filterLabel'>{label}</InputLabel>
      <Select
        labelId='filterLabel'
        id='filterValue'
        value={selectedValue}
        onChange={handleChange}
        aria-labelledby='filterLabel'
        sx={{
          width: 200,
        }}
      >
        {options &&
          options.map((option, i) => (
            <MenuItem key={i} value={option}>
              {option}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}
