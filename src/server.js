
import express from "express";
import { postsRouter } from "./routes/post.Route.js";

const app = express();

app.use(express.json());
app.use("/posts", postsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
