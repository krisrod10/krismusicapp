import React from "react";
import { useState } from "react";

import TheCard from "../components/Card";
import theSwitch from "./Switch";
import theSlider from './Slide';
import theSelect from "./Select";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Dashboard() {
    const [isOnline, setIsOnline ] = useState(true);
    const [myVolume, setMyVolume ] = useState(30);
    const [mySound, setMySound ] = useState('normal');

    return(
        <Container maxWidth="md" className="dashboard">
        <Typography variant="h4" component="h2" sx={{ flexGrow: 1, fontweight: 500 }}>
            Welcome User!
        </Typography>
        <div className="dashboard-cards">
            <TheCard
                title="Online Mode"
                body="Is this application connected to the internet?"
                state={isOnline}
                setState={setIsOnline}
                component={theSwitch} />
            <TheCard
                title="Master Volume"
                body="Overrides all other sound settings in this application."
                state={myVolume}
                setState={setMyVolume}
                component={theSlider} />
            <TheCard
                title="Sound Quality"
                body="Manually control the music quality in event of poor connection."
                state={mySound}
                setState={setMySound}
                component={theSelect} />
        </div>
        <Typography variant="h5" component="h2" sx={{ flexGrow: 1, fontweight: 500 }}>
            System Notifications:
        </Typography>
        <ol>
            {!isOnline && <li>Your application is offline. You won't be able to share or stream music to other devices.</li>}
            {myVolume >= 90 && <li>Listening to music at a high volume could cause long-term hearing loss.</li>}
            {mySound === 'low' && <li>Music quality is degraded. Increase quality if your connection allows it.</li>}
        </ol>
    </Container>
    )
}