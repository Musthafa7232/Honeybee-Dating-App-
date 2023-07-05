import { Card, CardContent, Grid, Typography, Button } from "@mui/material";
import React from "react";
import Card1 from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent1 from "@mui/joy/CardContent";
import KeepMountedModal from "./KeepMountedModal";
import { useState } from "react";
function RenderMatchCard({ matches,isLoading }) {
    const [open, setOpen] = React.useState(false);
const [user,setUser]=useState(null)
    const handleViewProfile=(item)=>{
        setOpen(true)
        setUser(item)
    }
  return (
    <>
      <Grid item xs={12} sx={{ my: 2 }}>
        <Card
          className="CardItems"
          variant="outlined"
          sx={{
            mb: 4,
            minHeight: "120vh",
            borderRadius: 6,
            backdropFilter: "brightness(0.9) blur(15px)",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
          }}
        >
          <CardContent component={Grid} container>
            {matches?.map((item) => {
              return (
                <Grid item xs={12} lg={4} sx={{my:1}}>
                  <Card1
                    key={item._id}
                    sx={{
                      width: { xs: 250, sm: 150, lg: 250 },
                      height: { xs: 250, sm: 150, lg: 250 },
                    }}
                  >
                    <CardCover>
                      <img src={item.profilePic} loading="lazy" alt="" />
                    </CardCover>
                    <CardCover
                      sx={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                      }}
                    />
                    <CardContent1
                      sx={{ justifyContent: "flex-end", color: "white" }}
                    >
                      <Typography level="h2" fontSize="lg" mb={1}>
                        {item.fullName}
                      </Typography>
                      <Button sx={{ m: 1 }} color="warning" variant="outlined" onClick={()=>handleViewProfile(item)}>
                        View Profile
                      </Button>
                      <Button sx={{ m: 1 }} color="inherit" variant="outlined">
                        Chat
                      </Button>
                    </CardContent1>
                  </Card1> 
                  <KeepMountedModal user={user} setUser={setUser} open={open} setOpen={setOpen} isLoading={isLoading} />
                </Grid>
              );
            })}
          </CardContent>
        </Card>
       
      </Grid>
    </>
  );
}

export default RenderMatchCard;
