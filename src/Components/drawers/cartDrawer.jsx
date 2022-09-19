import React from "react";
import {
  Button,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { closeCartDrawer } from "../../redux/cartDrawer.slice";

export default function CartDrawer() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.cartDrawer.open);

  return (
    <Drawer
      open={open}
      anchor="right"
      PaperProps={{
        sx: {
          borderRadius: 1,
          width: 170,
        },
      }}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 0,
          width: 3 / 4,
        }}
      >
        <ListItemButton>
          <ListItemText sx={{ display: "flex", justifyContent: "center" }}>
            1
          </ListItemText>
        </ListItemButton>
        <Divider orientation="vertical" variant="middle" flexItem />
        <ListItemButton>
          <ListItemText sx={{ display: "flex", justifyContent: "center" }}>
            2
          </ListItemText>
        </ListItemButton>
        <Divider orientation="vertical" variant="middle" flexItem />
        <ListItemButton>
          <ListItemText sx={{ display: "flex", justifyContent: "center" }}>
            3
          </ListItemText>
        </ListItemButton>
        <Divider orientation="vertical" variant="middle" flexItem />
        <ListItemButton>
          <ListItemText sx={{ display: "flex", justifyContent: "center" }}>
            4
          </ListItemText>
        </ListItemButton>
        <Divider orientation="vertical" variant="middle" flexItem />
        <ListItemButton>
          <ListItemText sx={{ display: "flex", justifyContent: "center" }}>
            5
          </ListItemText>
        </ListItemButton>
        <Divider orientation="vertical" variant="middle" flexItem />

        <Divider orientation="vertical" variant="middle" flexItem />
        <Button
          onClick={() => {
            dispatch(closeCartDrawer());
          }}
        >
          Cerrar
        </Button>
      </List>
    </Drawer>
  );
}
