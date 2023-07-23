import React from "react";
import { Modal, Box, Typography, Button, } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";

function BlockedUsermodal({ open, close, user }) {

  const onDeclineCall = () => {
    close();
  };

  return (
    <Modal open={open}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "white",
          p: 10,
          borderRadius: 4,
          maxWidth: 500,
          textAlign: "center",
        }}
      >
        <Button
          sx={{ position: "absolute", top: 8, right: 8 }}
          color="inherit"
          onClick={onDeclineCall}
        >
          <CloseIcon fontSize="large" />
        </Button>

        <Box>
          <Typography variant="overline" component="div" textAlign="center">
            User is Blocked. Please Unblock to continue chatting.
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
}

export default BlockedUsermodal;

