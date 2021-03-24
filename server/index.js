const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

app.use(cors());
app.use(express.json());

const pgp = require("pg-promise")({});
const cn = {
  host: "localhost",
  port: 5432,
  database: "sightings",
  user: "leiaque",
  password: "",
};
const db = pgp(cn);

// create login route
app.get("/login/:username", async (req, res) => {
  try {
    const users = await db.any(
      `SELECT * FROM researchers WHERE username = '${req.params.username}';`,
      [true]
    );
    let success = users.length >= 1 ? true : false;
    console.log({ success });
    res.json({ success: success });
  } catch (e) {
    console.log(e);
  }
});

// requests all from sightings
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
