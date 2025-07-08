import mongoose, { Schema, model } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbConnection: string | undefined = process.env.DB_CONNECTION;

if (!dbConnection) {
  throw new Error("DB_CONNECTION environment variable is not defined.");
}

mongoose
  .connect(dbConnection)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const UserSchema = new Schema({
  username: { type: String, required: true },
  email:    { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

export const UserModel = model("User", UserSchema); 

const ContentSchema = new Schema({
  content_type: { type: String, required: true },
  link:         { type: String, required: true },
  description:  { type: String, required: true },
  userId:       { type: mongoose.Types.ObjectId, ref: 'User', required: true }, 
});

export const ContentModel = model("Content", ContentSchema);
