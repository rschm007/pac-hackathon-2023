import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import Image from "next/image";


export const Header = () => {


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: "black"
                }}
            >
                <Toolbar>

                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <img
                        src="/Font-Panasonic-Logo.jpg"
                        width={225}
                        height={100}
                        alt={"panasonic logo"}
                    />

                </Toolbar>
            </AppBar>
        </Box>
    )
}