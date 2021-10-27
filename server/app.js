const express = require("express");
const app = express();
const productsRouter = require("./routes/productsRouter");

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.use("/api/products", productsRouter);

app.all("*", (req, res) => {
  res.status(404).json({
    status: "failed",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

module.exports = app;
