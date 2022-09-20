import { MongoClient } from "mongodb";

export default async function getPaths(email) {
  const client = await MongoClient.connect(
    "mongodb+srv://HarisAlicic:DgtFw70X7vbHCAYD@cluster0.besz6lo.mongodb.net/users?retryWrites=true&w=majority"
  );

  const db = client.db();

  const result = await db.collection("users").findOne({ email: email });

  return result;
}
