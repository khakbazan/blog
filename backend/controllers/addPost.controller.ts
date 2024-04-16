import { Request, Response } from "express";
import fs from "fs";
import { readFile } from "../utils/readFile";
import { PostsDataTypes } from "../types/general";
import showdown from "showdown";

export const addPostController = async (
  request: Request,
  response: Response
) => {
  try {
    const { title, body, hashtags } = request.body;
    const converter = new showdown.Converter();

    const postsList = readFile<PostsDataTypes>("data/posts.json");

    const newPost = {
      title,
      body: converter.makeHtml(body),
      hashtags: hashtags?.split(",")?.map((hashtag: string) => hashtag?.trim()),
      readingTime: "10 دقیقه",
      author: "کاربر",
      authorId: 2582,
      commentsCount: 0,
      createdAt: Date.now(),
      id: postsList?.data?.length + 1,
    };

    fs.writeFileSync(
      "data/posts.json",
      JSON.stringify({ data: [...postsList?.data, newPost] }, undefined, 4)
    );

    response.status(200).json({ message: "پست جدید باموفقیت افزوده شد" });
  } catch (error: any) {
    response
      .status(error?.code ?? 500)
      .json({ message: error?.message ?? "مشکلی پیش آمده" });
  }
};
