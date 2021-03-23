const express = require("express");
const app = express();
const cors = require("cors");

// json body parser
app.use(express.json());
// allows cross origin requests
app.use(cors());

app.get("/", (req, res) => {
  res.send("Ok express is connected");
});

app.listen(3001);
