'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FormSelect({houseInfo,setHouseInfo,dataObj}) {
  const [selected, setSetSelected] = React.useState('');

  const handleChange = (event) => {
    setHouseInfo({
        ...houseInfo,
        [dataObj.dataField]: event.target.value
    });
    setSetSelected(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
         {/**label based on dataObj.labelTitle */}
        <InputLabel id="demo-simple-select-label">{dataObj.options[0]}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selected}
          label={dataObj.labelTitle}
          onChange={handleChange}
        >
            {/**map items based on options provided in dataobect.options arr */}
        {dataObj.options.map(option => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
        ))}
        </Select>
      </FormControl>
    </Box>
  );
}

/**
 *   <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
 */