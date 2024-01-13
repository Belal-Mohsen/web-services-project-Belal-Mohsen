import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function SliderSizes({value, onChange }) {
    const handleInputChange = (e) => {
        onChange(parseInt(e.target.value, 10));
      };
    return (
        <Box sx={{ width: 200 }}>
            <Slider defaultValue={value} value={value} aria-label="Default" valueLabelDisplay="auto" onChange={handleInputChange} />
        </Box>
    );
}