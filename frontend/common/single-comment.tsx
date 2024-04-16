import { IoCloseOutline, IoRefreshOutline } from "react-icons/io5";
import { PostAuthor } from "./post-author";

type SingleCommentProps = {
  author: string;
  avatar: string;
  body: string;
  createdAt: number;
  isOptimisticError?: boolean;
  onRetry?: () => void;
  onCancel?: () => void;
  isSubmiting?: boolean;
};

export const SingleComment: React.FC<SingleCommentProps> = ({
  author,
  avatar,
  body,
  createdAt,
  isOptimisticError,
  onCancel,
  onRetry,
  isSubmiting,
}) => {
  return (
    <div className={isSubmiting ? "animate-pulse" : undefined}>
      <div
        className={`border  ${
          isOptimisticError ? "border-red-500" : "border-gray-300"
        } rounded-sm p-4`}
      >
        <PostAuthor avatar={avatar} author={author} unixDate={createdAt} />

        <div className="mt-4">
          <p className="leading-6">{body}</p>
        </div>
      </div>

      {isOptimisticError && (
        <div className="flex items-center justify-between mt-1.5">
          <p className=" text-red-500">نظر شما ثبت نشد</p>

          <div className="flex items-center gap-x-2">
            <div
              onClick={onCancel}
              className="flex items-center gap-x-1 group cursor-pointer"
            >
              <IoCloseOutline className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-red-500" />
              <p className=" group-hover:text-red-500">انصراف</p>
            </div>

            <div
              onClick={onRetry}
              className="flex items-center gap-x-1  cursor-pointer group"
            >
              <IoRefreshOutline className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-black" />
              <p className="group-hover:text-black">تلاش مجدد</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const SingleCommentSkeleton: React.FC = () => {
  return (
    <div className="border border-gray-200 rounded-sm p-4">
      <div className="flex items-center gap-x-2">
        <div className="skeleton rounded-full w-10 h-10"></div>

        <div className="space-y-1.5">
          <div className="w-20 h-3 skeleton"></div>
          <div className="w-16 h-2.5 skeleton"></div>
        </div>
      </div>

      <div className="mt-4 space-y-2.5">
        <div className="skeleton w-full h-3.5"></div>
        <div className="skeleton w-full h-3.5"></div>
        <div className="skeleton w-full h-3.5"></div>
      </div>
    </div>
  );
};
