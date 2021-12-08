import React from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function theSelect({
    state,
    handleChange
}) {

    return (
        <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <Select
                    value={state}
                    onChange={(event) => handleChange(event.target.value)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value={'low'}>Low</MenuItem>
                    <MenuItem value={'normal'}>Normal</MenuItem>
                    <MenuItem value={'high'}>High</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}