import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import Card1 from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent1 from "@mui/joy/CardContent";
import KeepMountedModal from "../Modal/KeepMountedModal";
import { useState } from "react";

function RenderLikedUsersCard({ matches, isLoading }) {
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = useState(null);

  const handleViewProfile = (item) => {
    setOpen(true);
    setUser(item);
  };

  return (
    <>
      <Grid item xs={12} sx={{ my: 2 }}>
        <Card
          className="CardItems"
          variant="outlined"
          sx={{
            height: '38rem',
            mb: 4,
            borderRadius: 6,
            backdropFilter: "brightness(0.9) blur(15px)",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            overflow: "hidden",
          }}
        >
          <CardContent
            sx={{
              height: "100%",
              overflowY: "scroll",
              "&::-webkit-scrollbar": {
                width: "7px",
              },
              "&::-webkit-scrollbar-track": {
                background: "transparent",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "darkgrey",
                borderRadius: "2rem",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "grey",
                borderRadius: "2rem",
              },
            }}
            component={Grid}
            spacing={2}
            container
          >
            {matches?.map((item) => {
              return (
                <Grid
                  key={item._id}
                  item
                  xs={12}
                  md={4}
                  xl={4}
                  sx={{ my: 1, mx: { xs: 2, lg: 0 } }}
                >
                  <Card1
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
                    </CardContent1>
                  </Card1>
                  <KeepMountedModal
                    user={user}
                    setUser={setUser}
                    open={open}
                    setOpen={setOpen}
                    isLoading={isLoading}
                  />
                </Grid>
              );
            })}
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

export default RenderLikedUsersCard;
