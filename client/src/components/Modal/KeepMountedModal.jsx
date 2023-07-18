import * as React from 'react';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { Grid, Skeleton } from "@mui/material";
import { Typography,Button } from "@mui/material";
import ImageContent from "../Discover/ImageContent";
import ChipsContent from "../Discover/ChipsContent";
import { ModalOverflow } from '@mui/joy';
export default function KeepMountedModal({user,setUser,open,setOpen,isLoading}) {
  const handleClose=()=>{
    setUser(null)
    setOpen(false)
  }
  return (
    <React.Fragment>
      <Modal keepMounted open={open} onClose={handleClose } >
        <ModalOverflow>

        <ModalDialog
        sx={
          {
            maxWidth:'80%'
          }
        }
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
         <Box sx={{ width: "100%", height: "40vh", position: "relative" }}>
              <Box
                sx={{ objectFit: "cover", width: "100%", height: "100%" }}
                component="img"
                src={user?.coverPic ? user?.coverPic : "/cover-picture.png"}
                loading="lazy"
              />
              <Box
                sx={{
                  objectFit: "cover",
                  width: 150,
                  height: 150,
                  borderRadius: "5rem",
                  position: "absolute",
                  top: "100%",
                  left: { xs: "10%", lg: "23%" },
                  transform: "translate(50%, -50%)",
                }}
                loading="lazy"
                component="img"
                src={user?.profilePic ? user?.profilePic : "/avatar.jpg"}
              />
            </Box>
              <Grid container>
                <Grid item xs={2}/>
                <Grid item xs={12} lg={8} sx={{ mt: { xs: 10, lg: 9, xl: 9 } }}>
                  <Typography
                    sx={{
                      textAlign: { xs: "center", lg: "" },
                      fontFamily: "sans-serif",
                      fontSize: { lg: "2rem" },
                      fontWeight: "bold",
                    }}
                  >
                    {isLoading ? <Skeleton width="15rem" /> : user?.fullName}
                    {isLoading ? (
                      <Skeleton width="5rem" />
                    ) : (
                      <Typography variant="caption">{user?.age}</Typography>
                    )}
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: { xs: "center", lg: "" },
                      fontSize: { xs: 7, lg: 14 },
                    }}
                    variant="subtitle2"
                  >
                    {isLoading ? <Skeleton width="13rem" /> : user?.bio}
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: { xs: "center", lg: "" },
                      fontSize: { xs: 7, lg: 14 },
                    }}
                    variant="subtitle2"
                  >
                    {isLoading ? <Skeleton width="13rem" /> : user?.location}
                  </Typography>
                  <Grid
                    item
                    xs={12}
                    lg
                container
                spacing={2}
                sx={{my:3}}
                  >
                   <ChipsContent isLoading={isLoading} user={user}/>
                  </Grid>
                </Grid>
           <ImageContent user={user}/>
              </Grid>
          
        </ModalDialog>
        </ModalOverflow>
      </Modal>
    </React.Fragment>
  );
}