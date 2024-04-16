import { shimmerPlaceholder } from "@/utils/shimmerPlaceholder";
import { unixToIsoDate } from "@/utils/unixToIsoDate";
import { unixToPersianDate } from "@/utils/unixToPersianDate";
import Image from "next/image";

type PostAuthorProps = {
  author: string;
  avatar: string;
  unixDate: number;
};

export const PostAuthor: React.FC<PostAuthorProps> = ({
  author,
  avatar,
  unixDate,
}) => {
  return (
    <div className="flex items-center gap-x-2">
      <Image
        src={avatar}
        width={40}
        height={40}
        placeholder={shimmerPlaceholder(40, 40)}
        alt=""
        className="rounded-full"
        aria-label="آواتار نویسنده"
      />

      <div>
        <span aria-label="نام نویسنده" className="text-xs sm:text-sm block">
          {author}
        </span>
        <time
          className="text-xs"
          aria-label="زمان انتشار پست"
          dateTime={unixToIsoDate(unixDate)}
          title={unixToPersianDate(unixDate)}
        >
          {unixToPersianDate(unixDate)}
        </time>
      </div>
    </div>
  );
};
