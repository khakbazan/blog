import { IoBookmarkOutline } from "react-icons/io5";

export const PostReadingTime: React.FC = () => {
  return (
    <div className="flex items-center gap-x-1">
      <IoBookmarkOutline
        aria-label="ذخیره پست"
        className="w-5 h-5 hover:text-primary cursor-pointer"
      />
      <small className="text-[0.65rem] sm:text-xs" aria-label="زمان مطالعه">
        خواندن 2 دقیقه
      </small>
    </div>
  );
};
