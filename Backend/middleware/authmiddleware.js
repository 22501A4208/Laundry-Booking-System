import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const authmiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  //console.log(token)
  if (!token) {
    return res.status(401).json({ message: "Access Denied! No token provided." });
  }

  try {
    console.log(token.replace("Bearer ", ""))
    console.log("JWT_SECRET:", process.env.JWT_SECRET);

    const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
    console.log("dcoded value",decoded)
    req.user = decoded;

    next();
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: "Invalid Token" });
  }
};

export default authmiddleware;
