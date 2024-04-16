import { Request, Response } from "express";
import fs from "fs";
import { readFile } from "../utils/readFile";
import { PostsDataTypes } from "../types/general";

export const editPostController = async (
  request: Request,
  response: Response
) => {
  try {
    const { id } = request.params;
    const { title, image, price, text } = request.body;

    const postsList = readFile<PostsDataTypes>("data/posts.json");

    const newPostsList = postsList?.data?.map((product) => {
      if (product.id.toString() === id) {
        return {
          title,
          image,
          price,
          text,
          id: id,
        };
      }

      return product;
    });

    fs.writeFileSync(
      "data/posts.json",
      JSON.stringify({ data: newPostsList }, undefined, 4)
    );

    response.status(200).json({ message: "پست مدنظر باموفقیت ویرایش شد" });
  } catch (error: any) {
    response
      .status(error?.code ?? 500)
      .json({ message: error?.message ?? "مشکلی پیش آمده" });
  }
};
