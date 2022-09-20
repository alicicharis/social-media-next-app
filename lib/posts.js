import { MongoClient } from "mongodb";

export default async function getPosts(email) {
  const client = await MongoClient.connect(
    "mongodb+srv://HarisAlicic:DgtFw70X7vbHCAYD@cluster0.besz6lo.mongodb.net/posts?retryWrites=true&w=majority"
  );

  const db = client.db();

  const test = await db
    .collection("posts")
    .find({ userEmail: email })
    .toArray();

  return test;
}
