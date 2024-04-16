"use client";
import { PostCard, PostCardSkeleton } from "@/common/post-card";
import { PostPreview } from "@/common/post-preview";
import { fetchPostsList } from "@/models/posts";
import { useInfiniteQuery, useIsMutating } from "@tanstack/react-query";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

export const LastPosts: React.FC = () => {
  // this state store a post id and we use this post id for get post data from cache
  // and also toggle modal visibility. when its null modal is closed and when this state
  // have value, post preview modal will be open
  const [previewPostId, setPreviewPostId] = useState<number | null>(null);

  const {
    data,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
    isLoading,
    isRefetching,
    isError,
  } = useInfiniteQuery({
    queryKey: ["posts"],
    initialPageParam: 1,
    staleTime: 1000 * 60 * 2,
    queryFn: (context) =>
      fetchPostsList({ pageNumber: context?.pageParam, pageSize: 10 }),
    getNextPageParam: (response) => {
      return response?.nextPage;
    },
    getPreviousPageParam: (response) => {
      return response?.lastPage;
    },
  });

  // detect when a new post is pending. this hook will return a number (count of new post requests that are in pending state)
  const isAddingNewPost = useIsMutating({
    mutationKey: ["add-post"],
  });

  // detect when user reaches last post
  const isEndOfList = useInView({
    onChange: (isInView) => {
      if (isInView && !isFetching) {
        fetchNextPage();
      }
    },
  });

  // an skeleton loading UI for initial loading state of fetching last posts
  if (isLoading) {
    return (
      <div className="space-y-3">
        {Array.from({ length: 6 }, (_, idx) => (
          <PostCardSkeleton key={`post-loading-${idx}`} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="box">
        <p className="text-center md:text-base">دریافت پست ها ناموفق بود</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {/* we show users a skeleton post ui for when user created a new post and
        immediately returned to home page. i created post is in invalidating
       state or optimistic update situation
      */}
      {isAddingNewPost || isRefetching ? <PostCardSkeleton /> : null}

      {data?.pages?.map((page) =>
        page?.data?.map((post) => (
          <PostCard
            key={`post-${post?.id}`}
            id={post?.id}
            title={post?.title}
            author={post?.author}
            commentsCount={post?.commentsCount}
            hashtags={post?.hashtags}
            createdAt={post?.createdAt}
            onPreviewClick={() => setPreviewPostId(post?.id)}
          />
        ))
      )}

      {isFetchingNextPage ? <PostCardSkeleton /> : null}

      {/* when user reaches end of the page and bellow DIV tag becomes visible,
           we will fetch next page */}
      <div ref={isEndOfList.ref}></div>

      <PostPreview
        postId={previewPostId}
        isVisible={!!previewPostId}
        onClose={() => setPreviewPostId(null)}
      />
    </div>
  );
};
