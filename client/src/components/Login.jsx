import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Navbar from "./Navbar";
import "./Login.css";
import Otp from "./Otp";
import Phone from "./Phone";
import BackdropFilter from "react-backdrop-filter";


export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <>
      <Navbar />
  
      <Box sx={{ mx:10,my:6,p:10 }}>
      <Card variant="outlined" sx={{ borderRadius: 6,    backdropFilter: 'brightness(0.9) blur(15px)',
    backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
        <CardContent>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{
          my: 4,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 10,
        }}
      >
        <Phone />
        <Button
       
          type="submit"
          variant="outline"
          sx={{ mt: 3, mb: 2, backgroundColor:"rgb(9, 235, 222)" }}
        >
          Continue
        </Button>
        <Grid container></Grid>
      </Box>
    </CardContent>
        </Card>
      </Box>
     
    </>
  );
}
