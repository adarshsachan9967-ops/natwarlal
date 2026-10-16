const dns = require("dns");
try {
  dns.setServers(["8.8.8.8", "1.1.1.1"]);
} catch (e) {}

const { MongoClient } = require("mongodb");
const path = require("path");
const fs = require("fs");

const uri =
  process.env.MONGODB_URI ||
  "mongodb+srv://adarshsachan9967_db_user:4vdVPmlv1eQYlW9Y@natwarlal.nftjfup.mongodb.net/natwarlal?retryWrites=true&w=majority";

async function seed() {
  console.log("Connecting to MongoDB Atlas...");
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected successfully to MongoDB Atlas!");
    const db = client.db("natwarlal");

    // 1. Gallery Collection
    console.log("Seeding gallery_items...");
    const galleryCol = db.collection("gallery_items");
    await galleryCol.createIndex({ id: 1 }, { unique: true });

    // 2. Videos Collection
    console.log("Seeding video_media...");
    const videoCol = db.collection("video_media");
    await videoCol.createIndex({ id: 1 }, { unique: true });

    // 3. Contact Messages Collection
    console.log("Setting up contact_messages collection...");
    const contactCol = db.collection("contact_messages");
    await contactCol.createIndex({ createdAt: -1 });

    // 4. News Articles Collection
    console.log("Seeding news_articles...");
    const newsCol = db.collection("news_articles");
    await newsCol.createIndex({ slug: 1 }, { unique: true });

    // 5. Timeline Milestones Collection
    console.log("Seeding timeline_milestones...");
    const timelineCol = db.collection("timeline_milestones");
    await timelineCol.createIndex({ id: 1 }, { unique: true });

    console.log("Database collections and indexes initialized successfully in MongoDB Atlas!");
  } catch (err) {
    console.error("MongoDB seed error:", err);
  } finally {
    await client.close();
    console.log("MongoDB connection closed.");
  }
}

seed();
