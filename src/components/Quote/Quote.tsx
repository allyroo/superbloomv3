import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       textAlign: "center",
//     },
//   })
// );

export const Quote = () => {
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();

  useEffect(() => {
    axios.get("https://zenquotes.io/api/quotes").then((response) => {
      const getRandomIndex = Math.floor(Math.random() * response.data.length);
      setQuote(response.data[getRandomIndex].q);
      setAuthor(response.data[getRandomIndex].a);

      console.log(response.data[getRandomIndex].a);
      console.log(response.data[getRandomIndex].q);
    });
  }, []);

  return (
    <div>
      {quote}
      <br />
      {author}
      <br />
    </div>
  );
};
