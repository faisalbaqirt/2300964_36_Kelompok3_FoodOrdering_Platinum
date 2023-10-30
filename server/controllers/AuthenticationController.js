const db = require("../db/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secretKey = "b36709837c301f474a0199f4c4b4e82e";

class UserController {
  async signUp(req, res) {
    try {
      const { email, username, password } = req.body;

      const encryptedPassword = bcrypt.hashSync(password.toString(), 10);
      await db("users").insert({
        email,
        username,
        password: encryptedPassword,
      });
      res.status(201).json({
        message: "success",
      });
    } catch (error) {
      console.error(error);
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;

      const user = await db("users").where({ username }).first();

      if (!user) {
        return res.json({ message: "user not found" });
      }

      const isPasswordValid = await bcrypt.compare(
        password.toString(),
        user.password
      );
      if (!isPasswordValid) {
        return res.json({ message: "Wrong Password" });
      }

      const accessToken = jwt.sign(
        { id: user.id, username: user.username },
        secretKey
      );

      return res.status(200).json({
        id: user.id,
        username: user.username,
        accessToken: accessToken,
      });
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = new UserController();
