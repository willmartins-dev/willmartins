import { Router } from "express";
import "dotenv/config";
import { conectDb } from "../../config/db.js";
import User from "./model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = Router();
const bcryptSalt = bcrypt.genSaltSync();
const { JWT_SECRETKEY } = process.env;

router.get("/", async (req, res) => {
  conectDb();
  try {
    const UserDoc = await User.find();
    res.json(UserDoc);
  } catch (error) {
    res.status(404).json(error);
  }
});

router.get("/profile", async (req, res) => {
  const { token } = req.cookies;

  if (token) {
    const userInfo = jwt.verify(token, JWT_SECRETKEY, {}, (error, userInfo) => {
      if (error) throw error;
      res.json(userInfo);
    });
  } else {
    res.json(null);
  }
});

router.post("/", async (req, res) => {
  conectDb();
  const { name, email, password } = req.body;

  const encryptedPassword = bcrypt.hashSync(password, bcryptSalt);

  try {
    const newUserDoc = await User.create({
      name,
      email,
      password: encryptedPassword,
    });

    const { _id } = newUserDoc;
    const newUserObj = { name, email, _id };
    const token = jwt.sign(newUserObj, JWT_SECRETKEY, {}, (error, token) => {
      if (error) throw error;
      res.cookie("token", token).json(newUserObj);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  conectDb();
  const { email, password } = req.body;

  try {
    const userDoc = await User.findOne({ email });

    if (userDoc) {
      const passwordCorrect = bcrypt.compareSync(password, userDoc.password);
      const { _id, name } = userDoc;
      if (passwordCorrect) {
        const newUserObj = { _id, name, email };
        const token = jwt.sign(newUserObj, JWT_SECRETKEY);

        res.cookie("token", token).json(newUserObj);
      } else {
        res.json("Senha inválida!");
      }
    } else {
      res.status(400).json("Usuário não encontrado!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("token").json("Deslogado com sucesso!");
});
export default router;
