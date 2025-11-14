const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

function readJSON(filePath) {
  try {
    const raw = fs.readFileSync(path.join(__dirname, filePath));
    return JSON.parse(raw);
  } catch (err) {
    return null;
  }
}

app.get("/api/university1", (req, res) => {
  const data = readJSON("data/university1.json");
  if (!data) return res.status(500).json({ error: "Data not found" });
  res.json(data);
});

app.get("/api/university2", (req, res) => {
  const data = readJSON("data/university2.json");
  if (!data) return res.status(500).json({ error: "Data not found" });
  res.json(data);
});

app.get("/api/fees", (req, res) => {
  const data = readJSON("data/fees.json");
  if (!data) return res.status(500).json({ error: "Data not found" });
  res.json(data);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
