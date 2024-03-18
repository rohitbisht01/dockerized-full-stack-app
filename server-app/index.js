const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = 4000;

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    data: {
      name: "rohit",
      age: 23,
    },
  });
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
