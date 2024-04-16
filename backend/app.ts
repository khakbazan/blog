import express from "express";
import { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { postsRoutes } from "./routes/posts.route";
import { commentsRoutes } from "./routes/comments.route";

require("dotenv").config();

const app: Application = express();
const PORT: number | string = 3000;

app.set("trust proxy", 1);

app.options("*", cors());

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(postsRoutes());
app.use(commentsRoutes());

app.use(express.static(__dirname + "/public"));

app.disable("etag");

app.listen(PORT, () => {
  console.log(`Server is running`);
});
