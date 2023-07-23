import React from "react";
import { Modal, Box, Typography, Button, } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";

function FilterModal({ open, close }) {

  const onDeclineCall = () => {
    close();
  };

  return (
    <Modal open={open} >
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
          <Typography variant="overline" textAlign="center">
            Inorder to use Videocall you must have  HoneyGold Subscription Atleast.
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
}

export default FilterModal;