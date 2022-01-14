import React, { useState, useEffect } from "react";
import JournalAddEntry from "../JournalAddEntry/JournalAddEntry";
import JournalEntries from "../JournalEntries/JournalEntries";
import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";

//type definition
export interface JournalState {
  entries: {
    title: string;
    entrydate: string;
    entry: string;
  }[];
}

export const Journal = () => {
  const [entries, setEntries] = useState<JournalState["entries"]>([]);

  return (
    <div className="Journal">
      <JournalEntries entries={entries} />
      <JournalAddEntry setEntries={setEntries} entries={entries} />
    </div>
  );
};
