import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import { hashPassword } from "../../../lib/auth";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.method);
  if (req.method !== "POST") return;

  const data = req.body;

  const { userName, email, password } = data;

  // console.log(data);

  if (!data) {
    res.status(422).json({ message: "Invalid User Input" });
    return;
  }

  if (userName.length < 3) {
    res
      .status(422)
      .json({ message: "Username should have at least 3 characters!" });
    return;
  }

  if (email.length < 10 || !email.includes("@")) {
    res.status(422).json({
      message: "Invalid Email",
    });
    return;
  }

  if (password.length < 5) {
    res
      .status(422)
      .json({ message: "Password should have at least 5 characters!" });
    return;
  }

  const client = await MongoClient.connect(
    "mongodb+srv://HarisAlicic:DgtFw70X7vbHCAYD@cluster0.besz6lo.mongodb.net/users?retryWrites=true&w=majority"
  );

  const db = client.db();

  const userNameTaken = await db
    .collection("users")
    .findOne({ userName: userName });

  if (userNameTaken) {
    res.status(422).json({ message: "Username is already taken!" });
    client.close();
    return;
  }

  const existingUser = await db.collection("users").findOne({ email: email });

  if (existingUser) {
    res.status(422).json({ message: "Email already taken!" });
    client.close();
    return;
  }

  const hashedPassword = hashPassword(password);

  const result = await db
    .collection("users")
    .insertOne({ userName: userName, email: email, password: hashedPassword });

  res.status(200).json({ message: "User registered successfully!" });
  client.close();
}

export default handler;
