import "dotenv/config";
import mongoose, { Mongoose } from "mongoose";

const { MONGO_URL } = process.env;

export const conectDb = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Banco conectado!");
  } catch (error) {
    console.log("Vixi deu merda! a porra do erro foi:", error);
  }
};
