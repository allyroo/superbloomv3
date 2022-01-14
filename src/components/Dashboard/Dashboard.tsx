import React from "react";
import Box from "@mui/material/Box";
import { HabitToggle } from "../HabitToggle";
import { SmartGoal } from "../SmartGoal";
import { XEffect } from "../XEffect";
import { Journal } from "../Journal";
import { Quote } from "../Quote";

export const Dashboard = () => {
  const date = new Date();
  const hours = date.getHours();

  let dayTime;

  if (hours < 12) {
    dayTime = "morning";
  } else if (hours >= 12 && hours < 17) {
    dayTime = "afternoon";
  } else {
    dayTime = "night";
  }
  return (
    <div>
      <h1>Good {dayTime}!</h1>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(25, 1fr)",
          gridTemplateRows: "repeat(30, 1fr)",
          gridColumnGap: 0,
          gridRowGap: 0,
          border: 1,
        }}
      >
        <Box
          sx={{
            gridArea: "8 / 4 / 28 / 13",
            border: 1,
          }}
        >
          <h1>XEffect</h1>
          <XEffect />
        </Box>
        <Box
          sx={{
            gridArea: "4 / 4 / 7 / 13",
            border: 1,
          }}
        >
          <h1>Habit</h1>
          <HabitToggle />
        </Box>
        <Box
          sx={{
            gridArea: "4 / 15 / 9 / 23",
            border: 1,
          }}
        >
          <h1>SMART Goal:</h1>
          <SmartGoal />
        </Box>
        <Box
          sx={{
            gridArea: "10 / 15 / 23 / 23",
            border: 1,
          }}
        >
          <h1>Journal</h1>
          <Journal />
        </Box>
        <Box
          sx={{
            gridArea: "24 / 15 / 28 / 23",
            border: 1,
          }}
        >
          <Quote />
          {/* <Quote /> */}
        </Box>
      </Box>
    </div>
  );
};
