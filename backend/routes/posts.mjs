import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";
const bcrypt = require('bcrypt');

const router = express.Router();
const token = require('crypto').randomBytes(64).toString('hex');

router.get("/", async (req, res) => {
  let collection = await db.collection("Fragen");
  let results = await collection.find({}).limit(50).toArray();

  res.send(results).status(200);
  console.log("Daten gelesen");
});

router.get("/getAll", async (req, res) => {
  let collection = await db.collection("Fragen");
  let results = await collection
    .aggregate([
      {
        $project: { frage: 1, antworten: 1, korrekteAntwort: 1, kategorie: 1 },
      },
    ])
    .toArray();
  res.send(results).status(200);
  console.log("Alle Daten gelesen: ");
});

router.get("/getKategorien", async (req, res) => {
  let collection = await db.collection("Fragen");
  let results = await collection.distinct("kategorie");
  res.send(results).status(200);
  console.log("Kategorien gelesen: ");
});

router.get("/getKat", async (req, res) => {
  let collection = await db.collection("Fragen");
  let kategorie = req.query.kat;
  let results = await collection
    .aggregate([
      { $match: { kategorie: kategorie } },
      {
        $project: {
          frage: 1,
          antworten: 1,
          korrekteAntwort: 1,
          kategorie: 1,
          _id: 1,
        },
      },
    ])
    .toArray();
  res.send(results).status(200);
  console.log("Ausgewählte Kategorie gelesen: ");
});

router.get("/:id", async (req, res) => {
  let collection = await db.collection("Fragen");
  let query = { _id: ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Kein Eintrag gefunden").status(404);
  else res.send(result).status(200);
});

router.post("/newQuestion", async (req, res) => {
  let collection = await db.collection("Fragen");
  let newDocument = req.body;
  let result = await collection.insertOne(newDocument);
  console.log(
    "Neue Frage hinzugefügt: " + newDocument.frage + " " + newDocument.kategorie
  );
  res.send(result).status(204);
});

router.delete("/delete/:id", async (req, res) => {
  let collection = await db.collection("Fragen");
  let query;
  try {
    query = { _id: ObjectId(req.params.id) };
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: 'Fehlerhafte ID' });
  }
  console.log("Frage gelöscht ");
  let result;
  try {
    result = await collection.deleteOne(query);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: 'Fehler beim löschen' });
  }
  res.send(result).status(200);
});

router.put("/update/:id", async (req, res) => {
  let collection = await db.collection("Fragen");
  let filter = { _id: ObjectId(req.params.id) };

  let update = {
    $set: {
      frage: req.body.frage,
      antworten: req.body.antworten,
      korrekteAntwort: req.body.korrekteAntwort,
      kategorie: req.body.kategorie
    }
  };

  try {
    let result = await collection.updateOne(filter, update);
    console.log("Frage geändert: " + req.body.frage);
    res.send(result).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Fehler beim updaten' });
  }
});

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await db.collection('Users').insertOne({ username, email, password: hashedPassword });
  if (user) {
    res.status(200).send({ message: 'User erfolgreich angelegt' });
  } else {
    res.status(500).send({ error: 'Fehler bei der Registrierung' });
  }
});

router.post('/login', async (req, res) => {
  const user = await verifyUserCredentials(req.body.username, req.body.password);
  if (user) {
    const token = jwt.sign({ id: user._id }, token, { expiresIn: '1h' });
    res.status(200).send({ token });
    console.log("Login erfolgreich");
  } else {
    res.status(401).send({ error: 'Ungültige Eingabedaten' });
  }
});

async function verifyUserCredentials(username, password) {
  const user = await db.collection('Users').findOne({ username });
  if (user) {
    const passwordMatches = await bcrypt.compare(password, user.password);
    if (passwordMatches) {
      return user;
    }
  }
  return null;
}

export default router;
