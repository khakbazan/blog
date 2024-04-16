import { Request, Response } from "express";
import { readFile } from "../utils/readFile";
import { CommentsDataTypes } from "../types/general";

export const fetchPostCommentsController = async (
  request: Request,
  response: Response
) => {
  const { id } = request.params;

  try {
    const commentsList = readFile<CommentsDataTypes>("data/comments.json");

    const postComments = commentsList?.data?.filter(
      (post) => post.postId === Number(id)
    );

    setTimeout(() => {
      response.status(200).json({ data: postComments?.reverse() });
    }, 1500);
  } catch (error: any) {
    response.status(500).json(error?.message);
  }
};
