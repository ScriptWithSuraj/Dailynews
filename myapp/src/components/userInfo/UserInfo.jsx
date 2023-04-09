import { useState } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";
import { useUserContext } from "../userContext";

const UserInfo = ({ open, onClose }) => {
  const { user } = useUserContext();

  const handleClose = () => {
    onClose();
  };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     // console.log({ username, email });
  //     handleClose();
  //   };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          //   boxShadow: 100,
          p: 4,
          borderRadius: 10,
          backgroundImage:
            "url('https://images.pexels.com/photos/7598536/pexels-photo-7598536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <form>
          <TextField
            label="Username"
            value={user && user.displayName}
            margin="dense"
            fullWidth
            InputProps={{ readOnly: true }}
          />
          <TextField
            label="Email"
            value={user && user.email}
            margin="dense"
            fullWidth
            InputProps={{ readOnly: true }}
          />
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button onClick={handleClose} sx={{ mr: 1 }}>
              Close
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default UserInfo;
