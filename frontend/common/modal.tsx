"use client";
import { OutsideLayout } from "@/layouts/outside-layout";
import {
  CSSProperties,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import { useTransition, animated } from "react-spring";

type Props = PropsWithChildren<{
  title?: ReactNode;
  isVisible: boolean;
  onClose: () => void;
  closeOnOutsideClick?: boolean;
  styles?: CSSProperties;
  footer?: ReactNode;
}>;

export const Modal: React.FC<Props> = ({
  isVisible,
  onClose,
  title,
  styles,
  footer,
  closeOnOutsideClick = true,
  children,
}) => {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalElement(document.getElementById("portal_root"));

    () => setPortalElement(null);
  }, []);

  const transitions = useTransition(isVisible, {
    from: { position: 0, opacity: 0 },
    enter: { position: 1, opacity: 1 },
    leave: { position: 0, opacity: 0 },
    reverse: isVisible,
  });

  return portalElement
    ? createPortal(
        transitions(
          ({ position, opacity }, item) =>
            item && (
              <animated.div
                style={{
                  opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
                }}
                className="bg-black/20 backdrop-blur fixed inset-0 z-[999] w-full h-full flex justify-center items-center"
              >
                <OutsideLayout
                  onOutsideClick={closeOnOutsideClick ? onClose : undefined}
                >
                  <animated.div
                    className="relative  z-[9999] max-h-full max-w-[600px] min-w-[450px] min-h-[300px] bg-white  border border-gray-300 rounded-lg flex flex-col justify-between"
                    style={{
                      scale: position.to({ range: [0.0, 1.0], output: [0, 1] }),
                      ...styles,
                    }}
                  >
                    <div className="overflow-y-auto lg:overflow-y-visible">
                      {title ? (
                        <div className="flex items-center justify-between p-5">
                          {title}

                          <div className="cursor-pointer" onClick={onClose}>
                            <IoClose className="w-6 h-6 hover:text-red-600" />
                          </div>
                        </div>
                      ) : null}

                      <div>{children}</div>
                    </div>

                    <div>{footer}</div>
                  </animated.div>
                </OutsideLayout>
              </animated.div>
            )
        ),
        portalElement
      )
    : null;
};
