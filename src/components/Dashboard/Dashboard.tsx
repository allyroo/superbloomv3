import React from "react";
import Box from "@mui/material/Box";
import { HabitToggle } from "../HabitToggle";
import { SmartGoal } from "../SmartGoal";
import { XEffect } from "../XEffect";
import { Journal } from "../Journal";
import { Quote } from "../Quote";

// const useStyles = makeStyles({
//     root: {
//     padding: "0",
//     margin: "0",
//   })

interface Props {
  title?: string;
}

export const Dashboard = (props: Props) => {
  return (
    <div>
      <h3>Sample</h3>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(11, 1fr)",
          gridTemplateRows: "repeat(14, 1fr)",
          gridColumnGap: 0,
          gridRowGap: 0,
        }}
      >
        <Box
          sx={{
            gridArea: "3 / 2 / 5 / 6",
          }}
        >
          <h1>Words</h1>
          {/* <HabitToggle /> */}
        </Box>
        <Box
          sx={{
            gridArea: "6 / 2 / 13 / 6",
          }}
        >
          <h1>Words</h1>
          {/* <XEffect /> */}
        </Box>
        <Box
          sx={{
            gridArea: "3 / 7 / 5 / 11",
          }}
        >
          <h1>Words</h1>
          {/* <SmartGoal /> */}
        </Box>
        <Box
          sx={{
            gridArea: "6 / 7 / 10 / 11",
          }}
        >
          <h1>Words</h1>
          {/* <Journal /> */}
        </Box>
        <Box
          sx={{
            gridArea: "11 / 7 / 13 / 11",
          }}
        >
          <h1>Words</h1>
          {/* <Quote /> */}
        </Box>
      </Box>
    </div>
  );
};
