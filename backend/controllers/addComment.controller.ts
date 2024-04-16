import { Request, Response } from "express";
import fs from "fs";
import { readFile } from "../utils/readFile";
import { CommentsDataTypes } from "../types/general";
import { throwError } from "../utils/throwError";

export const addCommentController = async (
  request: Request,
  response: Response
) => {
  try {
    const { body, author, postId } = request.body;

    if (Math.random() < 0.5) {
      throwError("ارور تستی با شانس 50 درصد, دوباره امتحان کن", 500);
    }

    const commentsList = readFile<CommentsDataTypes>("data/comments.json");

    const newComment = {
      body,
      author,
      postId,
      id: commentsList?.data?.length + 1,
    };

    fs.writeFileSync(
      "data/comments.json",
      JSON.stringify(
        { data: [...commentsList?.data, newComment] },
        undefined,
        4
      )
    );

    response.status(200).json({ message: "کامنت جدید باموفقیت افزوده شد" });
  } catch (error: any) {
    response
      .status(error?.code ?? 500)
      .json({ message: error?.message ?? "مشکلی پیش آمده" });
  }
};
