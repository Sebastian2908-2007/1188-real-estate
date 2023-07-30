'use client'
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FormSelect({formInfo,setFormInfo,dataObj}) {
  const [selected, setSetSelected] = useState('');

  const handleChange = (event) => {
    setFormInfo({
        ...formInfo,
        [dataObj.dataField]: event.target.value
    });
    setSetSelected(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120,marginTop:'11%',borderRadius:'50%' }}>
      <FormControl fullWidth className='bg-white rounded-lg'>
         {/**label based on dataObj.labelTitle */}
         <InputLabel className='text-sitegrn' id="demo-simple-select-label">{selected}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selected}
          label={dataObj.labelTitle}
          onChange={handleChange}
        >
            {/**map items based on options provided in dataobect.options arr */}
        {dataObj.options.map(option => (
            <MenuItem  key={option} value={option}>{option}</MenuItem>
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