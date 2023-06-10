import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Navbar from "../Navbar/Navbar";
function Landing() {
  return (
    <div>
      <Navbar />
      <Card
        variant="outlined"
        sx={{
          my: 3,
          mx: 4,
          backdropFilter: "brightness(0.9) blur(15px)",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <CardContent>
          
        </CardContent>
      </Card>
    </div>
  );
}

export default Landing;
