import Image from "next/image";
import { Fragment } from "react";
import { PostShare } from "../../common/post-share";
import { PostAuthor } from "../../common/post-author";
import { shimmerPlaceholder } from "@/utils/shimmerPlaceholder";

type PostBodyProps = {
  body: string;
  title: string;
  image: string;
  author: string;
  createdAt: number;
  postId: number;
  hashtags: string[];
};

export const PostBody: React.FC<PostBodyProps> = ({
  body,
  image,
  title,
  author,
  createdAt,
  postId,
  hashtags,
}) => {
  return (
    <Fragment>
      <header className="space-y-5">
        <div className="flex items-center justify-between">
          <PostAuthor
            unixDate={createdAt}
            author={author}
            avatar="/images/user-avatar-1.png"
          />

          <PostShare postLink={`/posts/${postId}`} />
        </div>

        <div className="space-y-3">
          <Image
            src={image}
            width={1920}
            height={1080}
            placeholder={shimmerPlaceholder(1920, 1080)}
            className="rounded-md mx-auto"
            alt={title}
          />

          <small aria-label="زمان مطالعه" className="hidden  sm:block">
            خواندن 2 دقیقه
          </small>
        </div>

        <h1>{title}</h1>
      </header>

      <section
        aria-label="متن پست"
        className="post-body-styles mt-3"
        dangerouslySetInnerHTML={{ __html: body ?? "" }}
      ></section>

      <div aria-label="هشتگ های پست" className="flex items-center gap-x-1.5">
        {hashtags?.map((hashtag, idx) => (
          <p
            key={`post-${postId}-hashtag-${idx}`}
            className="ltr px-3.5 py-1 bg-gray-100 rounded-md"
          >{`#${hashtag}`}</p>
        ))}
      </div>
    </Fragment>
  );
};
