import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Container } from "@mui/material";
import DiscreteSlider from "./Slider";

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart.slice";
import { useState } from "react";

export default function MultiActionAreaCard({ id, name, price }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: "flex", flexDirection: "column" }}>
        <DiscreteSlider setQuantity={setQuantity} />
        <Button
          size="small"
          onClick={() => {
            if (quantity !== 0)
              dispatch(
                addToCart({
                  id,
                  name,
                  price,
                  quantity,
                })
              );
          }}
          sx={{
            color: "#176512",
            borderColor: "#176512",
            border: "solid",
            borderRadius: 4,
          }}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
