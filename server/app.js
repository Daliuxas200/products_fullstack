const express = require("express");
const app = express();
const productsRouter = require("./routes/productsRouter");

app.use(express.json());

app.use("/api/products", productsRouter);

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "failed",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

module.exports = app;
