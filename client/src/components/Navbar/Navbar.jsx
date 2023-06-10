import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { context } from "../../ContextProvider.jsx";
import momtez  from '@fontsource/montez'
function Navbar() {
  const [userDetails, setUserDetails] = useContext(context);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const logoutHandler = () => {
    localStorage.removeItem("authorization.user");
    setUserDetails({})
    navigate('/login')
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    console.log(userDetails.isVerified);
  }, []);

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <FavoriteIcon
                sx={{ display: { md: "flex" }, mr: 1 }}
              />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "flex" },
                  fontFamily: "Montez",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                HoneyBee
              </Typography>
            </Box>

            {userDetails.isVerified && (
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar
                    sx={{ width: 32, height: 32 }}
                    src={userDetails.profilePic}
                  >
                    <AccountCircleIcon />
                  </Avatar>
                </IconButton>
              </Tooltip>
            )}
          </Box>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/userProfile"
            >
              <MenuItem>
                <Avatar />
                My account
              </MenuItem>
            </Link>
            <Divider />
            <MenuItem onClick={logoutHandler}>
              <ListItemIcon>
                <LogoutIcon fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
