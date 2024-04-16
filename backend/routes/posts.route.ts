import express from "express";
import { fetchPostsListController } from "../controllers/fetchPostsList.controller";
import { fetchPostcontroller } from "../controllers/fetchPost.controller";
import { addPostController } from "../controllers/addPost.controller";
import { editPostController } from "../controllers/editPost.controller";
import { deletePostController } from "../controllers/deletePost.controller";

const router = express.Router();

export const postsRoutes = () => {
  router.get("/posts", fetchPostsListController);
  router.get("/posts/:id", fetchPostcontroller);

  router.post("/posts", addPostController);

  router.put("/posts/:id", editPostController);

  router.delete("/posts/:id", deletePostController);

  return router;
};
