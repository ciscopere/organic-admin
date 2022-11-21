import { Grid, Zoom } from "@mui/material";
import { useState } from "react";
import Card from "../Card";

const PRODUCTS = [
  {
    id: "m1",
    name: "Acelga",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Lechuga",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Tomate",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Huevos",
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
  },
  {
    id: "m10",
    name: "Manzana",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m11",
    name: "gengibre",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m12",
    name: "Curcuma",
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m13",
    name: "Naranja",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m14",
    name: "Mandarina",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m15",
    name: "Pera",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m16",
    name: "Mandarina",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const delay = 30;

const AvailableProducts = (props) => {
  const renderProducts = PRODUCTS.map((product, index) => (
    <Zoom
      key={product.id}
      in
      style={{ transitionDelay: delay * index + 1 + "ms" }}
    >
      <Grid item xs={4} sm={3} md={2}>
        <Card
          id={product.id}
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
        {renderProducts}
      </Grid>
    </div>
  );
};

export default AvailableProducts;
