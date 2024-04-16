"use client";
import { SingleComment, SingleCommentSkeleton } from "@/common/single-comment";
import { fetchPostComments, requestAddComment } from "@/models/comments";
import { useMutation, useQuery } from "@tanstack/react-query";
import { PostAddComment } from "./post-add-comment";
import { AxiosError } from "axios";
import { ApiError } from "@/models/general";
import toast from "react-hot-toast";

type PostCommentsProps = {
  postId: number;
};

export const PostComments: React.FC<PostCommentsProps> = ({ postId }) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchPostComments(postId),
    staleTime: 1000 * 60 * 5,
    enabled: !!postId,
  });

  // this useMutation also has a optimistic update for adding new comments
  const addComment = useMutation({
    mutationKey: ["add-comment"],
    mutationFn: requestAddComment,
    onSettled: async () => {
      return await refetch();
    },
    onError: (error: AxiosError<ApiError>) => {
      toast.error(error?.response?.data?.message ?? "مشکلی پیش آمده");
    },
  });

  return (
    <section className="border-t border-t-gray-300 pt-5 mt-8 md:px-8">
      <header>
        <h2 className="text-lg sm:text-xl md:text-2xl font-black">{`نظرات (${
          data?.data?.length ?? 0
        })`}</h2>
        <p className="mt-0.5">
          <strong>نکته:</strong> برای دیدن حالت ارور ثبت نظر، 50 درصد امکان
          دریافت ارور بصورت شانسی وجود داره.
        </p>
      </header>

      <div className=" mt-6 space-y-10">
        <PostAddComment
          onSubmit={(body) =>
            addComment.mutate({
              author: "کاربر",
              body: body,
              postId: postId,
            })
          }
        />

        <div className=" space-y-3">
          {/* 
            optimistic update
            we show added comment immediately after submiting comment
            we show comment card when addComment status is pending or error
            we show in pending, because we dont wanna wait until backend sends back domment
            and also we show comment in error state, because we want to give users a chance to 
            click retry button to trying to add comment again
          */}
          {addComment.isPending || addComment.isError ? (
            <SingleComment
              isSubmiting={addComment.isPending}
              avatar="/images/user-avatar-1.png"
              author={addComment.variables?.author}
              body={addComment.variables?.body}
              createdAt={Date.now()}
              isOptimisticError={addComment.isError}
              onRetry={() => addComment.mutate(addComment.variables)}
              onCancel={() => addComment.reset()}
            />
          ) : null}

          {isLoading ? (
            Array.from({ length: 2 }, (_, idx) => (
              <SingleCommentSkeleton key={`comment-loading-${idx}`} />
            ))
          ) : data?.data?.length ? (
            data?.data?.map((comment) => (
              <SingleComment
                key={`post-${postId}-comment-${comment?.id}`}
                avatar="/images/user-avatar-1.png"
                author={comment?.author}
                body={comment?.body}
                createdAt={Date.now()}
              />
            ))
          ) : (
            <p className="text-center py-3">نظری یافت نشد</p>
          )}
        </div>
      </div>
    </section>
  );
};
