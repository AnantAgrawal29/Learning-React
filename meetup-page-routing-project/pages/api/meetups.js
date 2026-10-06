import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const client = await MongoClient.connect(
      "mongodb+srv://default:Anant2911@cluster0.onvfyiw.mongodb.net/?appName=Cluster0",
    );
    const db = client.db("meetups");
    const meetupCollection = db.collection("meetups");
    const result = await meetupCollection.find().toArray();
    console.log(result);
    client.close();
    res.status(201).json({ meetups: result });
  }
}
