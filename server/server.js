const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
require("dotenv").config();

const port = process.env.PORT || "3001";
const data = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "product_list.json"))
);

app.listen(port, () => {
  console.log(`Server now listening on port ${port}`);
});

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json(data.slice(0, 10));
});
