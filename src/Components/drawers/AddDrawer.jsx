import React from "react";
import {
  Button,
  Divider,
  Drawer,
  Grid,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { closeAddDrawer } from "../../redux/addDrawer.slice";
import { CenterFocusStrong } from "@mui/icons-material";

function FormRow() {
  return (
    <React.Fragment>
      <Grid item>
        <Item>1</Item>
      </Grid>
      <Grid item>
        <Item>2</Item>
      </Grid>
      <Grid item>
        <Item>3</Item>
      </Grid>
      <Grid item>
        <Item>4</Item>
      </Grid>
      <Grid item>
        <Item>5</Item>
      </Grid>
    </React.Fragment>
  );
}

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
          justifyContent: "space-around",
          display: "flex",
        },
      }}
    >
      <Grid
        container
        // direction="column"
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          height="200px"
        >
          <Grid>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>10</Button>
          </Grid>
        </Grid>
        <Button
          onClick={() => {
            dispatch(closeAddDrawer());
          }}
        >
          Cerrar
        </Button>
      </Grid>

      {/* <List
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
      </List> */}
    </Drawer>
  );
}
