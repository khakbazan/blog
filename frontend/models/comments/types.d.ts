import { PaginationInfo } from "../general";

export type Comment = {
  author: string;
  postId: number;
  postTitle: string;
  body: string;
  id: number;
};

export type FetchCommentsListResponse = {
  data: Comment[];
} & PaginationInfo;

export type FetchPostCommentsResponse = {
  data: Comment[];
};

export type RequestAddCommentBody = {
  author: string;
  postId: number;
  body: string;
};
