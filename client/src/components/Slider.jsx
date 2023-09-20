import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function SliderSizes() {
    const [value, setValue] = useState(20);
    console.log(value);

    const changeValue = (event, value) => {
        setValue(value);
    };
    return (
        <Box sx={{ width: 200 }}>
            <Slider defaultValue={value} value={value} aria-label="Default" valueLabelDisplay="auto" onChange={changeValue} />
        </Box>
    );
}