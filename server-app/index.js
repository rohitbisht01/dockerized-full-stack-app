const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = 4000;

const app = express();
app.use(cors());

app.get("/info", (req, res) => {
  res.status(200).json({
    data: {
      name: "Server running succesfully 🚀",
    },
  });
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
