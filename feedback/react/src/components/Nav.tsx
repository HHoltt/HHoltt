import {
    Box, AppBar,
    Toolbar, 
    // IconButton,
    Typography
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import {
//     Menu as MenuIcon,
//     PersonRounded as UserIcon
// } from "@mui/icons-material"

const Nav = () => {

    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, textAlign: "center" }}
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        Music Kits Cloud
                    </Typography>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <UserIcon />
                    </IconButton> */}
                </Toolbar>
            </AppBar>
        </Box>
    );

};

export default Nav;
