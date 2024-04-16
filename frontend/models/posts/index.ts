import { api } from "@/service/api";
import {
  FetchPostResponse,
  FetchPostsListResponse,
  RequestAddPostBody,
} from "./types";
import { PaginationParams } from "../general";
import { notFound } from "next/navigation";

export const fetchPostsList = async (pagination?: PaginationParams) => {
  const url = "/posts";

  const response = await api.get<FetchPostsListResponse>(url, {
    params: {
      pageNumber: pagination?.pageNumber,
      pageSize: pagination?.pageSize,
    },
  });

  return response.data;
};

export const fetchPost = async (postId: string) => {
  const url = `/posts/${postId}`;

  const response = await api.get<FetchPostResponse>(url);

  return response.data;
};

export const requestAddPost = (body: RequestAddPostBody) => {
  const url = "/posts";

  const response = api.post(url, body);

  return response;
};

export async function fetchPostSSR(id: string): Promise<FetchPostResponse> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`;

  const res = await fetch(url, {
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}
