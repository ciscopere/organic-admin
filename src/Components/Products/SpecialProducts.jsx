import { Card, Grid, Zoom } from "@mui/material";
import { useState } from "react";
import Product from "./Product";

const PRODUCTS = [
  {
    id: "s1",
    name: "Queso",
    description: "Buen queso",
    price: 22.99,
  },
  {
    id: "s2",
    name: "Leche",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "s3",
    name: "Miel",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Otro",
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Brocoli",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m6",
    name: "Espinaca",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m7",
    name: "Coliflor",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m8",
    name: "Frutilla",
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m9",
    name: "Banana",
    description: "Finest fish and veggies",
    price: 22.99,
  }
];
const delay = 30;



const SpecialProducts = (props) => {
  const items = PRODUCTS.map((product, index) => (
    <Zoom key={product.id} in style={{ transitionDelay: delay * index + 1 + 'ms' }}>
        <Grid item xs={4} sm={3} md={2}>
        <Product
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
        />
        </Grid>
    </Zoom>
  ));

  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {items}
      </Grid>
    </div>
    
  );
};

export default SpecialProducts;