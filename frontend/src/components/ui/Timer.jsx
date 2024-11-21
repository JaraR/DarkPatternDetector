import * as React from "react";
import Card from "@mui/material/Card";

export default function Timer() {
  return (
    <Card
      sx={{
        width: 350,
        height: 70,
        boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.3)",
        padding: 5,
      }}
    >
      This is a timer for infinite scrolling
    </Card>
  );
}
