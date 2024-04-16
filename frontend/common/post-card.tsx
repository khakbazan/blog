import Link from "next/link";
import { BiMessageRounded } from "react-icons/bi";
import { IoBookmarkOutline, IoEyeOutline } from "react-icons/io5";
import { Button } from "./button";
import { PostAuthor } from "./post-author";
import { PostReadingTime } from "./post-reading-time";

type PostCardProps = {
  id: number;
  title: string;
  hashtags: string[];
  author: string;
  commentsCount: number;
  onPreviewClick: () => void;
  createdAt: number;
};

export const PostCard: React.FC<PostCardProps> = ({
  id,
  title,
  author,
  commentsCount,
  onPreviewClick,
  hashtags,
  createdAt,
}) => {
  return (
    <article
      aria-label="کارت پست"
      className="box flex flex-col justify-between w-full h-56 group"
    >
      <div>
        <div className="flex items-center justify-between">
          <PostAuthor
            unixDate={createdAt}
            author={author}
            avatar="/images/user-avatar-1.png"
          />

          <div className="hidden md:block invisible md:group-hover:visible">
            <Button
              onClick={onPreviewClick}
              size="small"
              shape="secondary"
              addon={<IoEyeOutline />}
            >
              پیش نمایش
            </Button>
          </div>
        </div>

        <div className="space-y-1.5 mt-3.5">
          <Link href={`/posts/${id}`}>
            <h2 className="hover:text-primary line-clamp-2">{title}</h2>
          </Link>

          <div className="flex items-center gap-x-2 *:text-sm">
            {hashtags?.map((hashtag, idx) => (
              <p
                key={`post-${id}-hashtag-${idx}`}
                className="ltr"
              >{`#${hashtag}`}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <PostReadingTime />

        <div className="flex items-center gap-x-1">
          <BiMessageRounded className="w-4 h-4 sm:w-5 sm:h-5" />
          <p className="text-[0.65rem] sm:text-xs">{`${commentsCount} کامنت`}</p>
        </div>
      </div>
    </article>
  );
};

export const PostCardSkeleton: React.FC = () => {
  return (
    <div className="box flex flex-col justify-between w-full h-56 group">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <div className="w-11 h-11 rounded-full skeleton"></div>

            <div className="space-y-2">
              <div className="w-20 h-3 skeleton rounded-md"></div>
              <div className="w-16 h-2 skeleton rounded-md"></div>
            </div>
          </div>
        </div>

        <div className="space-y-2 mt-3.5">
          <div className="skeleton rounded-sm w-full h-5"></div>

          <div className="flex items-center gap-x-2">
            <div className="skeleton rounded-sm w-14 h-3"></div>
            <div className="skeleton rounded-sm w-14 h-3"></div>
            <div className="skeleton rounded-sm w-14 h-3"></div>
            <div className="skeleton rounded-sm w-14 h-3"></div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <div className="skeleton rounded-md w-4 h-5"></div>

          <div className="skeleton rounded-sm w-16 h-3"></div>
        </div>

        <div className="flex items-center gap-x-1">
          <div className="skeleton rounded-md w-4 h-5"></div>

          <div className="skeleton rounded-sm w-16 h-3"></div>
        </div>
      </div>
    </div>
  );
};
