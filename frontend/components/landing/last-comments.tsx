"use client";
import { fetchCommentsList } from "@/models/comments";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export const LastComments: React.FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["comments"],
    queryFn: () => fetchCommentsList({ pageNumber: 1, pageSize: 5 }),
    staleTime: 1000 * 60 * 5,
  });

  if (isError) {
    return (
      <div className="box">
        <p className="text-center md:text-base">دریافت نظرات ناموفق بود</p>
      </div>
    );
  }

  return (
    <div className="box">
      <h2 className="mb-1">#نظرات</h2>

      {isLoading ? (
        <div className="space-y-3">
          {Array.from({ length: 5 }, (_, idx) => (
            <div key={`comment-loading-${idx}`}>
              <div className="skeleton w-full h-4 rounded-sm"></div>
              <div className="skeleton w-1/2 h-4 rounded-sm mt-2"></div>
            </div>
          ))}
        </div>
      ) : (
        data?.data?.map((comment) => (
          <div
            key={`comment-${comment?.id}`}
            aria-label="نظر کاربر"
            className="border-b border-b-gray-300 last:border-b-0 py-3 first:pt-0 last:pb-0"
          >
            <Link
              href={`/posts/${comment?.postId}`}
              prefetch={false}
              className="line-clamp-3"
            >
              {comment?.body}
            </Link>
          </div>
        ))
      )}
    </div>
  );
};
