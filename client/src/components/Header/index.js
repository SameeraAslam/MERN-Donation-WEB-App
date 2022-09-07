import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import jwt from "jsonwebtoken";
import { useNavigate } from "react-router-dom";
import MuiAppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Avatar, Menu, MenuItem, Tooltip } from "@mui/material";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `100px`,
    marginLeft: `20px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Header = () => {
  const [user, setuser] = useState({});
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    const tempData = localStorage.getItem("token");
    if (tempData) setuser(localStorage.getItem("token"));
    console.log("token", user);
    //  const decode= jwt.decode(user);
    // console.log("User\t", decode);
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        "&.MuiAppBar-root": {
          backgroundColor: "transparent",
        },
      }}
    >
      <Toolbar>
        {true && (
          <div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-haspopup="true"
              onClick={handleMenu}
              aria-controls="menu-appbar"
              aria-label="donors"
              sx={{ mr: 2 }}
            >
              <MenuIcon style={{ color: "white" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  navigate("/donors");
                }}
              >
                Donors
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  navigate("/dashboard");
                }}
              >
                Dashboard
              </MenuItem>
            </Menu>
          </div>
        )}
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "flex", md: "flex" } }}>
          <Tooltip title="Log Out">
            <IconButton onClick={logout}>
              <Avatar style={{ fontSize: "17px" }}>
                {/* {user?.name[0]} */}
              </Avatar>
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
