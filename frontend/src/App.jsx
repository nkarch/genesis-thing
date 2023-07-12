import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { responsiveFontSizes } from "@mui/material";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import TopBar from "./components/TopBar";
import MainNav from "./components/MainNav";

import Home from "./pages/Home";
import Discography from "./pages/Discography";
import Release from "./pages/Release";

const App = () => {
    // Theme Config
    let darkTheme = createTheme({
        palette: {
            mode: "dark",
        },
    });

    darkTheme = responsiveFontSizes(darkTheme);

    // Main Nav Control
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />

            <Box sx={{ display: "flex" }}>
                <TopBar onToggleClick={handleDrawerToggle} />
                <MainNav mobileOpen={mobileOpen} onDrawerClose={handleDrawerToggle} />

                <Box component='main' sx={{ flexGrow: 1, p: 3, mt: 8 }}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/discography' element={<Discography />} />
                        <Route path='/discography/:slug' element={<Release />} />
                    </Routes>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default App;
