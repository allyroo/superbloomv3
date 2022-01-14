import React from "react";
import { JournalState as Props } from "../Journal";

interface JournalProps {
  entries: Props["entries"];
}

const JournalEntries: React.FC<JournalProps> = ({ entries }) => {
  const renderList = (): JSX.Element[] => {
    return entries.map((entry) => {
      return (
        <li className="List">
          <div className="List-header">
            <h2>{entry.title}</h2>
          </div>
          <p className="List-note">{entry.entry}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default JournalEntries;
