import React from "react";
import Switch from "@mui/material/Switch";

const label = { inputProps: { 'aria-label': 'Online mode' }};

export default function theSwitch({
    state, handleChange
}) {
    return(
        <div>
            <Switch checked={state} onChange={(!state)} {...label} />
        </div>
    )
}