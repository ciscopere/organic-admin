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
import { closeAddDrawer } from "../../redux/addDrawer.slice";

export default function AddDrawer() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.addDrawer.open);

  return (
    <Drawer
      open={open}
      anchor="bottom"
      PaperProps={{
        sx: {
          borderRadius: 1,
          height: 170,
        },
      }}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
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
        <ListItemButton>
          <ListItemText sx={{ display: "flex", justifyContent: "center" }}>
            6
          </ListItemText>
        </ListItemButton>
        <Divider orientation="vertical" variant="middle" flexItem />
        <ListItemButton>
          <ListItemText sx={{ display: "flex", justifyContent: "center" }}>
            7
          </ListItemText>
        </ListItemButton>
        <Divider orientation="vertical" variant="middle" flexItem />
        <ListItemButton>
          <ListItemText sx={{ display: "flex", justifyContent: "center" }}>
            8
          </ListItemText>
        </ListItemButton>
        <Divider orientation="vertical" variant="middle" flexItem />
        <ListItemButton>
          <ListItemText sx={{ display: "flex", justifyContent: "center" }}>
            9
          </ListItemText>
        </ListItemButton>
        <Divider orientation="vertical" variant="middle" flexItem />
        <ListItemButton>
          <ListItemText sx={{ display: "flex", justifyContent: "center" }}>
            10
          </ListItemText>
        </ListItemButton>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Button
          onClick={() => {
            dispatch(closeAddDrawer());
          }}
        >
          Cerrar
        </Button>
      </List>
    </Drawer>
  );
}
