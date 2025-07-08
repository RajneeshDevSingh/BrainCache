import express, { Request, Response } from "express";
import jwt,{JwtPayload} from "jsonwebtoken";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import {ContentModel, UserModel } from "./db";
import { ValidateUser } from "./middleware";

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

  


