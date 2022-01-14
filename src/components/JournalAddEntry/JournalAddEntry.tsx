import React, { useState } from "react";
import { JournalState as Props } from "../Journal";

interface JournalProps {
  setEntries: React.Dispatch<React.SetStateAction<Props["entries"]>>;
  entries: Props["entries"];
}

const JournalAddEntry: React.FC<JournalProps> = ({ setEntries, entries }) => {
  const [input, setInput] = useState({
    title: "",
    entrydate: "",
    entry: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    if (!input.entrydate || !input.entry) return;

    setEntries([
      ...entries,
      {
        title: input.title,
        entrydate: input.entrydate,
        entry: input.entry,
      },
    ]);

    setInput({
      title: "",
      entrydate: "",
      entry: "",
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        onChange={handleChange}
        className="AddToList-input"
        name="title"
        value={input.title}
        placeholder="Title"
      />
      <input
        type="text"
        onChange={handleChange}
        className="AddToList-input"
        name="entrydate"
        value={input.entrydate}
        placeholder="Entry Date"
      />
      
      <textarea
        onChange={handleChange}
        className="AddToList-input"
        name="entry"
        value={input.entry}
        placeholder="Today's Entry"
      />
      <button onClick={handleClick} className="AddToList-btn">
        Add to List
      </button>
    </div>
  );
};

export default JournalAddEntry;
