import express from "express";
import fetch from "node-fetch";

const app = express();

// Binance ticker price
app.get("/binance/ticker", async (req, res) => {
  const symbol = req.query.symbol || "BTCUSDT";
  const url = `https://www.binance.info/fapi/v2/ticker/price`;
  const resp = await fetch(url);
  const data = await resp.json();
  const filtered = data.find(t => t.symbol === symbol);
  res.json(filtered || data);
});

// MEXC ticker price
app.get("/mexc/ticker", async (req, res) => {
  const resp = await fetch("https://futures.mexc.com/api/v1/contract/ticker");
  const data = await resp.json();
  res.json(data);
});

app.listen(3000, () => {
  console.log("MCP Server running at http://localhost:3000");
});
