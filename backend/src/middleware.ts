import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Types } from "mongoose";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in the environment variables.");
}

export const ValidateUser = (req: Request, res: Response, next: NextFunction): void => {
  console.log("Call reached to ValidateUser middleware");

  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    console.log("Header missing");
    res.status(403).json({ message: "Unauthorized, JWT token is required" });
    return;
  }

  const parts = authHeader.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    console.log("JWT token format is invalid");
    res.status(403).json({ message: "Unauthorized, JWT token format is invalid" });
    return;
  }

  const token = parts[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    
    (req as any).user = decoded;

    console.log("All is well ✅ Authenticated");
    next();
  } catch (err) {
    console.log("JWT token is wrong or expired");
    res.status(403).json({ message: "Unauthorized, JWT token is wrong or expired" });
  }
};
