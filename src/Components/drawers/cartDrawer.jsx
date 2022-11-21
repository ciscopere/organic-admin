import React from "react";
import {
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { closeCartDrawer } from "../../redux/cartDrawer.slice";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useNavigate } from "react-router-dom";

export default function CartDrawer() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.cartDrawer.open);
  const cart = useSelector((state) => state.cart.cartItems);

  const navigate = useNavigate();

  return (
    <Drawer
      open={open}
      anchor="right"
      PaperProps={{
        sx: {
          borderRadius: 1,
        },
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* <LocalGroceryStoreRoundedIcon fontSize="medium" /> */}
        <Typography>CARRITO</Typography>
        <IconButton
          onClick={() => dispatch(closeCartDrawer())}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <CloseRoundedIcon fontSize="large" />
        </IconButton>
      </Container>
      <Divider variant="middle" flexItem />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 0,
          width: 3 / 4,
        }}
      >
        {cart.map((cartItem) => {
          return (
            <>
              <ListItemButton key={cartItem.id}>
                <ListItemText
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  {cartItem.name} {cartItem.quantity}
                </ListItemText>
              </ListItemButton>
              <Divider variant="middle" flexItem />
            </>
          );
        })}
      </List>
      <Button
        onClick={() => {
          navigate("/cart");
          dispatch(closeCartDrawer());
        }}
        sx={{ justifyContent: "flex-end" }}
      >
        Open cart
      </Button>
    </Drawer>
  );
}
