import React, { useState, useEffect } from "react";
import { styled } from "@mui/styles";
import { Typography, Box, Button, Modal } from "@mui/material";

const AddGoalButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 10px",
});

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const SmartGoal = () => {
  // const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // function decCount() {
  //   setCount((prevCount) => prevCount - 1);
  // }
  // function upCount() {
  //   setCount((prevCount) => prevCount + 1);
  // }

  return (
    <div>
      {/* <AddGoalButton onClick={decCount}>-</AddGoalButton>
      {count}
      <AddGoalButton onClick={upCount}>+</AddGoalButton> */}
      <Button onClick={handleOpen}>Add Habit</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Choose a Habit:
          </Typography> */}
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Choose a Habit:
          </Typography>
          <select name="habits" id="habits">
            <option value="code">Code</option>
            <option value="sleep">Sleep</option>
            <option value="exercise">Exercise</option>
            <option value="read">Read</option>
            <option value="eat">Eat</option>
            <option value="meditate">Meditate</option>
          </select>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Input SMART Goal:
          </Typography>
          <input></input>
        </Box>
      </Modal>
    </div>
  );
};
