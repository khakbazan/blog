import { useQueryClient } from "@tanstack/react-query";
import { Modal } from "./modal";
import { FetchPostsListResponse } from "@/models/posts/types";
import { useMemo } from "react";
import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";

type PostPreviewProps = {
  isVisible: boolean;
  onClose: () => void;
  postId: number | null;
};

export const PostPreview: React.FC<PostPreviewProps> = ({
  isVisible,
  onClose,
  postId,
}) => {
  const queryClient = useQueryClient();

  // find and select the post data from react query cache to show a preview of post to user
  const post = useMemo(() => {
    if (!postId) {
      return;
    }

    // we use flatMap because of useInfiniteQuery hook. that hook stores data
    // in a nested array in cache, we have an array of objects (pages actually) that each page contains
    // a data property and that property is also an array of objects (posts) so we flat it first
    // and find our post then
    const postsList = queryClient
      .getQueryData<{
        pageParams: number;
        pages: FetchPostsListResponse[];
      }>(["posts"])
      ?.pages?.flatMap((page) => page?.data);

    return postsList?.find((post) => post.id === postId);
  }, [postId]);

  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <div className="p-5">
        <div className="space-y-3">
          <Image
            src="/images/post-cover.png"
            className="rounded-md"
            width={1920 / 3}
            height={1080 / 3}
            alt=""
          />
          <h2>{post?.title}</h2>
        </div>

        <div className="flex items-center gap-x-2 mt-1">
          <div className="flex items-center gap-x-2">
            <small>خواندن 2 دقیقه</small>
          </div>

          <div>-</div>

          <div className="flex items-center gap-x-1">
            <p className="text-xs">{`${post?.commentsCount} کامنت`}</p>
          </div>
        </div>

        <div
          className="line-clamp-3 mt-3"
          dangerouslySetInnerHTML={{ __html: post?.body ?? "" }}
        ></div>

        <div className="flex items-center justify-end gap-x-2 mt-5">
          <Button onClick={onClose} shape="secondary">
            بستن
          </Button>

          <Link href={`/posts/${postId}`} prefetch={false}>
            <Button>مشاهده</Button>
          </Link>
        </div>
      </div>
    </Modal>
  );
};
