export type SinglePost = {
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

export type PostsDataTypes = {
  data: SinglePost[];
};

export type SingleComment = {
  author: string;
  postId: number;
  postTitle: string;
  body: string;
};

export type CommentsDataTypes = {
  data: SingleComment[];
};
