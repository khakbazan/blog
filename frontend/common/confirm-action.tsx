import { PropsWithChildren, useState } from "react";
import { Modal } from "./modal";
import { Button } from "./button";
import { IoWarningOutline } from "react-icons/io5";

type Props = PropsWithChildren<{
  title: string;
  text: string;
  acceptTitle?: string;
  rejectTitle?: string;
  acceptBtnColor?: "green" | "red";
  onAccept?: () => void;
  onReject?: () => void;
}>;

export const ConfirmAction: React.FC<Props> = ({
  title,
  text,
  acceptTitle = "تائید",
  rejectTitle = "انصراف",
  acceptBtnColor = "red",
  onAccept,
  onReject,
  children,
}) => {
  const [show, setShow] = useState(false);

  const handleAccpet = () => {
    if (onAccept) {
      onAccept();
      return;
    }

    setShow(false);
  };

  const handleReject = () => {
    if (onReject) {
      onReject();
      return;
    }

    setShow(false);
  };

  return (
    <div>
      <div className="contents" onClick={() => setShow(true)}>
        {children}
      </div>

      <Modal
        styles={{
          maxWidth: "500px",
          width: "450px",
          minHeight: "auto",
        }}
        isVisible={show}
        onClose={() => setShow(false)}
        footer={
          <div className="p-3 flex justify-end items-center gap-x-2 bg-gray-50 rounded-b-lg">
            <Button rounded="full" onClick={handleReject} shape="ghost">
              {rejectTitle}
            </Button>

            <Button
              rounded="full"
              onClick={handleAccpet}
              shape={acceptBtnColor === "red" ? "danger" : "success"}
            >
              {acceptTitle}
            </Button>
          </div>
        }
      >
        <div className="p-10 flex flex-col justify-center h-full">
          <div className="flex gap-x-3.5 h-full">
            <div
              className={`w-[4.4rem] h-[4.4rem] flex items-center justify-center ${
                acceptBtnColor === "red" ? "bg-red-600/10" : "bg-orange-50"
              } rounded-full`}
            >
              <IoWarningOutline
                className={`w-11 h-11 ${
                  acceptBtnColor === "red" ? "text-red-600" : "text-orange-500"
                }`}
              />
            </div>

            <div className="space-y-0.5">
              <h3 className="text-black-1 text-lg font-medium">{title}</h3>
              <p className="text-black-2 text-base font-light">{text}</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
