import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openCartDrawer } from "../../redux/cartDrawer.slice";

export default function ButtonAppBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openShoppingCart = () => {
    dispatch(openCartDrawer());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
            onClick={() => dispatch(navigate("/"))}
          >
            <HomeRoundedIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            INGENIO ORGÁNICO
          </Typography>
          <Button color="inherit">Login</Button>
          <IconButton color="inherit" onClick={openShoppingCart} sx={{ p: 0 }}>
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
