import propTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import { useMediaQuery } from "@mui/material";

const MainNav = ({ mobileOpen, onDrawerClose }) => {
    const theme = useTheme();
    const drawerWidth = 160;
    const drawerBp = theme.breakpoints.up("sm");
    const drawerVariant = useMediaQuery(drawerBp) ? "permanent" : "temporary";

    const links = [
        {
            text: "Home",
            path: "/",
        },
        {
            text: "Discography",
            path: "/discography",
        },
    ];

    return (
        <>
            <Drawer
                variant={drawerVariant}
                open={mobileOpen}
                onClose={onDrawerClose}
                sx={{
                    width: { sm: drawerWidth },
                    flexShrink: { sm: 0 },
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
                }}
            >
                <Box sx={{ overflow: "auto", pt: 8 }}>
                    <List>
                        {links.map(({ text, path }, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton>{text}</ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

MainNav.propTypes = {
    mobileOpen: propTypes.bool,
    onDrawerClose: propTypes.func,
};

export default MainNav;
