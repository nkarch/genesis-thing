import propTypes from "prop-types";

import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const TopBar = ({ onToggleClick }) => {
    return (
        <AppBar position='fixed' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <IconButton
                    color='inherit'
                    aria-label='Open Drawer'
                    edge='start'
                    onClick={onToggleClick}
                    sx={{ mr: 1, display: { sm: "none" } }}
                >
                    <MenuIcon />
                </IconButton>

                <Typography variant='h6' noWrap component='div'>
                    Genesis Thing
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

TopBar.propTypes = {
    onToggleClick: propTypes.func,
};

export default TopBar;
