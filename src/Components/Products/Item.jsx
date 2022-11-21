import { Box, Button, Container, Typography } from "@mui/material";
import { useState } from "react";

export default function Item({ id, name, price }) {
  const [quantity, setQuantity] = useState(0);

  const handleDecrement = () => {
    if (quantity !== 0) setQuantity(quantity - 1);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

   return (
    <Box>
      <div>{name}</div>
      <Container sx={{display:"flex",flexDirection:"column" , justifyContent:"flex-end"}}>
        <Button sx={{}} onClick={handleIncrement}>
          +
        </Button>
        <Typography>{quantity}</Typography>
        <Button onClick={handleDecrement}>-</Button>
      </Container>
    </Box>
  );
}
