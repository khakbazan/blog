import express from "express";
import { fetchCommentsListController } from "../controllers/fetchCommentsList";
import { fetchPostCommentsController } from "../controllers/fetchPostComments";
import { addCommentController } from "../controllers/addComment.controller";

const router = express.Router();

export const commentsRoutes = () => {
  router.get("/comments", fetchCommentsListController);
  router.get("/comments/:id", fetchPostCommentsController);
  router.post("/comments", addCommentController);

  return router;
};
