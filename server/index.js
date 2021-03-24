const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

// allows cross origin requests
app.use(cors());
// json body parser
app.use(express.json());

// connects to PostgreSQL
const pgp = require("pg-promise")({});
const cn = {
  host: "localhost",
  port: 5432,
  database: "sightings",
  user: "leiaque",
  password: "",
};
const db = pgp(cn);

// check database connection
app.get("/sightings", async (req, res) => {
  try {
    const sighting = await db.any("SELECT * FROM sighting;", [true]);
    res.json({ sighting });
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, () => {
  console.log(`PG-Promise & Express Listening at http://localhost:${port}`);
});
