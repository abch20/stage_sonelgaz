import bcrypt from "bcryptjs";
import jwt, { decode } from "jsonwebtoken";
import {getUserByEmail,createUser} from "../models/userModel.js";
import { UserRoles } from "../constants/enum.js";

const registerUser = async (req, res) => {
  try {
    const { nom, prenom, email, password, role } = req.body;

    // Check if role is valid
    if (!Object.values(UserRoles).includes(role)) {
      return res.status(400).json({ error: "Invalid role" });
    }

    // Check if user already exists
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    console.log(password);
    

    // Create a new user
    await createUser({ nom, prenom, email, password: hashedPassword, role });

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};
const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await getUserByEmail(email);
      if (!user) {
        return res.status(401).json({ error: "Invalid credentials: email not found" });
      }

      // Check password
      const isMatch =  bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({ error: "Invalid credentials: incorrect password" });
      }
  
      // Generate JWT token
      const token = jwt.sign(
        { userId: user.id, userNom: user.nom, userPrenom: user.prenom, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
  
      // Decode token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
      res.json({ token, user: decoded });
    } catch (error) {
      res.status(500).json({ error: "Server error", details: error.message });
    }
};

export { registerUser, loginUser };