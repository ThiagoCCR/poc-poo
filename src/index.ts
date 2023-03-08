import express, { json } from "express";
import cors from "cors";
import productRouter from "./routers/productRouter";

const server = express();
server.use(cors());
server.use(json());

server.use(productRouter);

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Listening on ${port}`);
});
