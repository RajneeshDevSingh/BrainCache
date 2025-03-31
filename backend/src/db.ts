import mongoose,{model, Schema} from "mongoose";
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
    username:{type:String, required:true},
    email:{type:String, unique:true, required:true},
    password:{type:String, required:true}
})

export const UserModel = model("users", UserSchema);


// const ContentSchema = new Schema({
//     title: String,
//     link: String,
//     tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
//     type: String,
//     userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true },
// })

// const LinkSchema = new Schema({
//     hash: String,
//     userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true, unique: true },
// })

// export const LinkModel = model("Links", LinkSchema);
// export const ContentModel = model("Content", ContentSchema);