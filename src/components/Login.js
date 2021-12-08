import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Login ({ handleClick }) {
    return(
        <Box
        component="form"
        sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
        }}
        className="login-form"
        noValidate
        autoComplete="off"
    >
        <TextField id="standard-basic" label="Username *" size="small" variant="standard" />
        <TextField id="standard-basic" label="Password *" size="small" variant="standard" />
        <Button onClick={handleClick} variant="contained">Login</Button>
    </Box>
    )
}