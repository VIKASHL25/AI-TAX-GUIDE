
import db from "../config/pgDB.js";
import bcrypt from "bcryptjs";




const register = async (req, res) => {
  const { name, email, password, birthdate } = req.body;
  if (!name || !email || !password || !birthdate) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  try {
    const { rowCount } = await db.query(
      "SELECT 1 FROM users WHERE email = $1",
      [email]
    );
    if (rowCount) {
      return res
        .status(409)
        .json({ message: "Email already exists, please log in." });
    }
    const hash = await bcrypt.hash(password, 10);

    await db.query(
      `INSERT INTO users 
         (full_name, email, password_hash, date_of_birth)
       VALUES ($1, $2, $3, $4)`,
      [name, email, hash, birthdate]
    );

    return res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    console.error("Registration error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password required" });
  }

  try {
    const { rows } = await db.query(
      "SELECT user_id, password_hash FROM users WHERE email = $1",
      [email]
    );
    if (!rows.length) {
      return res
        .status(401)
        .json({ message: "Email not found, please register." });
    }
    const { id, password_hash: hash } = rows[0];

    const match = await bcrypt.compare(password, hash);
    if (!match) {
      return res.status(401).json({ message: "Invalid credentials" });
    }


    return res.json({
      message: "Login successful",
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export { register, login };
