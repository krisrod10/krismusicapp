import { useState } from "react";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";


import './App.css';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn)
  }
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
              My Music App
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      {isLoggedIn ? <Dashboard /> : <Login handleClick={handleClick} />}
    </div>
  );
}

export default App;
