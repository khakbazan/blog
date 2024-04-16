import { Request, Response } from "express";
import fs from "fs";
import { readFile } from "../utils/readFile";
import { PostsDataTypes } from "../types/general";

export const deletePostController = async (
  request: Request,
  response: Response
) => {
  try {
    const { id } = request.params;

    const postsList = readFile<PostsDataTypes>("data/posts.json");

    const newPostsList = postsList?.data?.filter(
      (product) => product?.id.toString() !== id
    );

    fs.writeFileSync(
      "data/posts.json",
      JSON.stringify({ data: newPostsList }, undefined, 4)
    );

    response.status(200).json({ message: "پست مدنظر باموفقیت حذف شد" });
  } catch (error: any) {
    response
      .status(error?.code ?? 500)
      .json({ message: error?.message ?? "مشکلی پیش آمده" });
  }
};
