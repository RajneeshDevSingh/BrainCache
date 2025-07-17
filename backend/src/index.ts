import express, { Request, Response } from "express";
import jwt,{JwtPayload} from "jsonwebtoken";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import {ContentModel, UserModel } from "./db";
import { ValidateUser } from "./middleware";
import mongoose from "mongoose";

const bcrypt = require("bcrypt");
const app = express();
app.use(express.json());
app.listen(3000, () => console.log("Port is open on 3000"));

app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"] 
}));

const jwtSecret = process.env.JWT_SECRET || "SecretBrainCachedefaultJWT";




app.post("/api/v1/signup", async (req: Request, res: Response): Promise<void> =>{
    const { name, email, password } = req.body;

    try {
    
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
             res.status(400).json({ message: "User already exists. Try SignIn 😊" });
             return;
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        await UserModel.create({
            username: name, 
            email,         
            password: hashedPassword, 
        });

        res.status(200).json({ message: "User signed up successfully 😊" });
    } catch (error) {
        res.status(500).json({ message: "Server error 😒", error });
    }
});




app.post("/api/v1/signin", async (req: Request, res: Response): Promise<void> =>{
    const { email, password } = req.body;
  
    try {
      // Find user by email
      const getUser = await UserModel.findOne({ email: email });
  
      if (!getUser) {
         res.status(400).json({ message: "Invalid credentials 😒" });
         return
        
      }
  
      // Compare hashed password
      const isPasswordValid = await bcrypt.compare(password, getUser.password);
      if (!isPasswordValid) {
         res.status(400).json({ message: "Invalid credentials 😒" });
         return
      }
  
      // Generate JWT token
      const token = jwt.sign({ id: getUser._id }, jwtSecret, { expiresIn: "2h" });
  
      res.status(200).json({
        userName:getUser.username,
        token,
        message: "Sign-in successful 😊",
        
      });
  
    } catch (error) {
      console.error("Sign-in error:", error);
      res.status(500).json({ message: "Server error 😒" });
    }
  });


 

interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    iat?: number;
    exp?: number;
  };
}

  app.post("/api/v1/addcontent", ValidateUser, async (req: AuthenticatedRequest, res: Response):Promise<void>=> {
  const { type, link, description } = req.body;

    if (!type || !link || !description || !req.user) {
    
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    console.log("AddContenet Details-:", type, link, description, req.user.id);
  try {
    const content = await ContentModel.create({
      content_type: type,
      link,
      description,
      userId: req.user.id, 
    });

    res.status(201).json({ message: "Content added" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});


interface CustomRequest extends Request{
  user?:{
    id:string,
  }
}
app.get("/api/v1/getcontent", ValidateUser, async (req:CustomRequest, res:Response)=>
{
  try {
      const userId = req.user?.id;
      // const userId = "686c98c6a8dec9417579c430"
      if(!userId)
      {
        res.status(400).json({message:"UserId doesn't exist or something wong"});
        console.log("UserId doesn't exist or something wong")
        return;
      }

    const userContent = await ContentModel.find({ userId: new mongoose.Types.ObjectId(userId) });

      res.status(200).json({messsage:"User data fetched successfully", UserAllContent: userContent})
      console.log("User data fetched successfully",userContent)
      return;
  } catch (error) {
    console.log("Error while fetching UserContent", error)
    res.status(403).json({message:"Error while fetching UserContent", error})
    return
  }

})



app.delete("/api/v1/deletecontent/:contentId", ValidateUser, async (req: CustomRequest, res: Response):Promise<void>=> {
  try {
    const userId = req.user?.id; // from ValidateUser middleware
    const contentId = req.params.contentId;

    console.log("UserId-: ", userId)
    console.log("Contentid-: ", contentId)
    // Optional: validate if contentId belongs to the user
    const deleted = await ContentModel.findOneAndDelete({
      _id: contentId
    });

    if (!deleted) {
     res.status(404).json({ message: "Content not found or unauthorized" });
     return
    }

    res.status(200).json({ message: "Content deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
    return
  }
});



