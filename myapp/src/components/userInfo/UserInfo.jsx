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
            "url('https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
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
            sx={{
              "& input": {
                fontWeight: "600",
              },
              "& label": {
                fontWeight: "600",
                color: "black",
              },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#634aa6",
                },
            }}
          />
          <TextField
            label="Email"
            value={user && user.email}
            margin="dense"
            fullWidth
            InputProps={{ readOnly: true }}
            sx={{
              "& input": {
                fontWeight: "600",
              },
              "& label": {
                fontWeight: "600",
                color: "black",
              },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#634aa6",
                },
            }}
          />
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button
              onClick={handleClose}
              sx={{
                mr: 1,
                fontWeight: "bold",
                color: "black",
                backgroundColor: "lightgray",
              }}
            >
              Close
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default UserInfo;
