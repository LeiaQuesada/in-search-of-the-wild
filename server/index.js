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
app.get("/login/:email", async (req, res) => {
  let userCreated = false;
  try {
    const users = await db.any(
      `SELECT * FROM researchers WHERE email = '${req.params.email}';`,
      [true]
    );
    if (users.length < 1) {
      const newUser = await db.one(
        `INSERT INTO researchers (email) VALUES ('${req.params.email}') RETURNING *;`,
        [true]
      );
      if (newUser.length > 0) {
        userCreated = true;
      }
    }
    res.json({ userCreated: userCreated });
  } catch (e) {
    console.log(e);
  }
});

app.post("/addsighting", async (req, res) => {
  try {
    const {
      creationdate,
      individual_id,
      // healthy,
      location,
      date,
      time,
    } = req.body;
    const newSighting = await db.one(
      `INSERT INTO sighting (creationdate, individual_id, location, date, time) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
      [creationdate, individual_id, location, date, time]
    );

    res.json({ message: "sighting created" });
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
