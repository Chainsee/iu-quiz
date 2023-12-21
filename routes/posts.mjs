import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// Get a list of 50 posts
router.get("/", async (req, res) => {
  let collection = await db.collection("posts");
  let results = await collection.find({})
    .limit(50)
    .toArray();

  res.send(results).status(200);
  console.log("Daten gelesen");
});

// Fetches the latest posts
router.get("/getAll", async (req, res) => {
  let collection = await db.collection("Fragen");
  let results = await collection.aggregate([
    {"$project": {"frage": 1, "antworten": 1 , "korrekteAntwort": 1, "kategorie": 1}}
  ]).toArray();
  res.send(results).status(200);
  console.log("Letzte Daten gelesen: ");
});

// Fetches the latest posts
router.get("/getKat", async (req, res) => {
  let collection = await db.collection("Fragen");
  let kategorie = req.query.kat;
  let results = await collection.aggregate([
    {$match: {"kategorie": kategorie}},
    {"$project": {"frage": 1, "antworten": 1 , "korrekteAntwort": 1, "kategorie": 1}}
  ]).toArray();
  res.send(results).status(200);
  console.log("Letzte Daten gelesen: ");
});

// Get a single post
router.get("/:id", async (req, res) => {
  let collection = await db.collection("posts");
  let query = {_id: ObjectId(req.params.id)};
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// Add a new document to the collection
router.post("/", async (req, res) => {
  let collection = await db.collection("posts");
  let newDocument = req.body;
  newDocument.date = new Date();
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

// Update the post with a new comment
router.patch("/comment/:id", async (req, res) => {
  const query = { _id: ObjectId(req.params.id) };
  const updates = {
    $push: { comments: req.body }
  };

  let collection = await db.collection("posts");
  let result = await collection.updateOne(query, updates);

  res.send(result).status(200);
});

// Delete an entry
router.delete("/:id", async (req, res) => {
  const query = { _id: ObjectId(req.params.id) };

  const collection = db.collection("posts");
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});

export default router;
