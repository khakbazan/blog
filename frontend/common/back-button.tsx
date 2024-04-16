"use client";
import { useRouter } from "next/navigation";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export const BackButton: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex">
      <div
        onClick={router.back}
        className="flex w-auto items-center gap-x-1 mb-4 group cursor-pointer"
      >
        <HiOutlineArrowNarrowRight className="size-6 lg:size-7 text-black-3 group-hover:text-primary" />
        <p className="font-medium group-hover:text-primary text-sm lg:text-base text-black-3">
          صفحه قبل
        </p>
      </div>
    </div>
  );
};
