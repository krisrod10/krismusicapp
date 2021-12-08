import React from "react";
import Box from '@mui/material/Box';
import Slider from "@mui/material/Slider";

export default function theSlider({
    state,
    handleChange
}) {
    return (
        <Box sx={{ width: 300 }}>
            <Slider
                defaultValue={30}
                step={10}
                marks min={0}
                max={100}
                valueLabelDisplay="auto"
                onChange={(event) => handleChange(event.target.value)} />
        </Box>
    );
}