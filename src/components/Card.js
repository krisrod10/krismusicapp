import React from "react"; 

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContext";
import Typography  from "@mui/material/Typography";

export default function TheCard({
    title,
    body,
    state,
    setState,
    component: Component
}) {
    const handleChange = (updatedState) => {
        setState(updatedState);
    }
    return(
        <Card sx={{ flexGrow: 1 }} className="card">
        <CardContent>
            <Typography variant="h6" component="h3" gutterBottom>
                {title}
            </Typography>
            <Typography variant="body2">
                {body}
            </Typography>
        </CardContent>
        <CardActions>
            <Component state={state} handleChange={handleChange}></Component>
        </CardActions>
    </Card>
    )
}