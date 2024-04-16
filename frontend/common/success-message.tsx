"use client";
import { Button } from "@/common/button";
import { useRouter } from "next/navigation";
import { ReactNode, useCallback } from "react";
import { Modal } from "./modal";
import { TickIcon } from "@/svg";

type Props = {
  show: boolean;
  hide: () => void;
  title: string;
  btnTitle: string;
  redirectUrl?: string;
  addonBtn?: ReactNode;
};

export const SuccessMessage: React.FC<Props> = ({
  hide,
  show,
  btnTitle,
  redirectUrl,
  title,
  addonBtn,
}) => {
  const router = useRouter();

  const handleClose = useCallback(() => {
    hide();

    if (redirectUrl) {
      router.push(redirectUrl);
    }
  }, [redirectUrl, hide]);

  return (
    <Modal isVisible={show} onClose={handleClose}>
      <div className="flex flex-col items-center justify-center space-y-4">
        <TickIcon />
        <p className="text-xl pt-1 font-medium text-black-3 dark:text-white-2">
          {title}
        </p>

        <div className="flex items-center gap-x-3 pt-5 pb-6">
          <Button onClick={handleClose} shape="ghost">
            {btnTitle}
          </Button>

          {addonBtn}
        </div>
      </div>
    </Modal>
  );
};
