import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  SpeedDial,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddDrawer from "../agregar/AddDrawer";
import { useDispatch } from "react-redux";
import { openAddDrawer } from "../../redux/addDrawer.slice";


const Product = (props) => {
  const dispatch = useDispatch();

  return (
    <Card>
      <CardContent>
        <Typography sx={{ display: "flex", justifyContent: "center" }}>
          {props.name}
        </Typography>
      </CardContent>
      <CardActions sx={{ flexDirection: "row-reverse" }}>
        <IconButton
          onClick={() => {dispatch(openAddDrawer())}}
          aria-label="add to cart"
        >
          <AddIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
