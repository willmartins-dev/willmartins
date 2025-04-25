import "dotenv/config";
import express from "express";
import UseRoutes from "./domains/users/routes.js";
import cors from "cors";

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(cors());
app.use("/users", UseRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
