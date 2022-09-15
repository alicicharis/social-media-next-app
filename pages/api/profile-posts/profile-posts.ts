import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const postText = req.body.postText;
    const userEmail = req.body.email;

    if (!postText) {
      res.status(401).json({ message: "Invalid Input!" });
      return;
    }

    if (postText.length < 1) {
      res.status(401).json({ message: "Post must have at least 1 character!" });
      return;
    }

    if (!userEmail) {
      res.status(401).json({ message: "No user email!" });
      return;
    }

    const client = await MongoClient.connect(
      "mongodb+srv://HarisAlicic:DgtFw70X7vbHCAYD@cluster0.besz6lo.mongodb.net/posts?retryWrites=true&w=majority"
    );

    const db = client.db();

    const result = await db
      .collection("posts")
      .insertOne({ userEmail: userEmail, postText: postText });

    res.status(200).json({ message: "Post posted" });

    client.close();
  }
}

export default handler;
