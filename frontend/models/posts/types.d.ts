import { PaginationInfo } from "../general";

export type Post = {
  id: number;
  title: string;
  body: string;
  readingTime: string;
  author: string;
  authorId: number;
  commentsCount: number;
  createdAt: number;
  hashtags: string[];
};

export type FetchPostsListResponse = {
  data: Post[];
} & PaginationInfo;

export type RequestAddPostBody = {
  title: string;
  hashtags: string;
  body: string;
};

export type FetchPostResponse = Post;
