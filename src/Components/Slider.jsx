import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";



export default function DiscreteSlider({ setQuantity }) {

  return (
    <Box sx={{ width: 80 }}>
      <Slider
        size="small"
        onChange={(e) => setQuantity(e.target.value)}
        aria-label="Quantity"
        defaultValue={0}
        valueLabelDisplay="auto"
        step={1}
        min={0}
        max={10}
        sx={{
          color: "#52af77",
          "& .MuiSlider-thumb": {
            width: 12,
            height: 12,
            backgroundColor: "#fff",
            border: "2px solid currentColor",
            "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
              boxShadow: "inherit",
            },
          },
          "& .MuiSlider-valueLabel": {
            lineHeight: 1.2,
            fontSize: 15,
            background: "unset",
            padding: 0,
            width: 2,
            height: 2,
            color: "black",
            borderRadius: "50% 50% 50% 0",
            // backgroundColor: "transparent",
            // backgroundColor: "#52af77",
            transformOrigin: "bottom left",
            transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
            "&:before": { display: "none" },
            "&.MuiSlider-valueLabelOpen": {
              transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
            },
            "& > *": {
              transform: "rotate(45deg)",
            },
          },
        }}
      />
    </Box>
  );
}
