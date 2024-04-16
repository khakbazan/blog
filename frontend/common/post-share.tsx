"use client";
import { useCopy } from "@/hooks/useCopy";
import { FaLink } from "react-icons/fa";
import { IoBookmarkOutline, IoLogoLinkedin } from "react-icons/io5";

type PostShareProps = {
  postLink: string;
};

export const PostShare: React.FC<PostShareProps> = ({ postLink }) => {
  const { copyToClipboard, timedSuccess } = useCopy();

  return (
    <div className="flex items-center gap-x-2.5 *:cursor-pointer">
      <IoBookmarkOutline
        aria-label="ذخیره پست"
        className="w-5 h-5 text-gray-500 hover:text-black-1"
      />

      <FaLink
        aria-label="کپی لینک پست"
        className={`w-4 h-4 ${
          timedSuccess ? "text-green-600" : "text-gray-500 hover:text-black-1"
        }`}
        onClick={() => copyToClipboard(postLink)}
      />

      <IoLogoLinkedin
        aria-label="اشتراک گذاری در لینکدین"
        className="w-5 h-5 text-gray-500 hover:text-black-1"
      />
    </div>
  );
};
