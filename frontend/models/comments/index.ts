import { api } from "@/service/api";
import {
  FetchCommentsListResponse,
  FetchPostCommentsResponse,
  RequestAddCommentBody,
} from "./types";
import { PaginationParams } from "../general";

export const fetchCommentsList = async (pagination?: PaginationParams) => {
  const url = "/comments";

  const response = await api.get<FetchCommentsListResponse>(url, {
    params: {
      pageNumber: pagination?.pageNumber,
      pageSize: pagination?.pageSize,
    },
  });

  return response?.data;
};

export const fetchPostComments = async (postId: number) => {
  const url = `/comments/${postId}`;

  const response = await api.get<FetchPostCommentsResponse>(url);

  return response.data;
};

export const requestAddComment = (body: RequestAddCommentBody) => {
  const url = "/comments";

  const response = api.post(url, body);

  return response;
};
