"use client";
import { PropsWithChildren, useEffect, useRef } from "react";

type Props = PropsWithChildren<{
  onOutsideClick?: () => void;
}>;

export const OutsideLayout: React.FC<Props> = ({
  children,
  onOutsideClick,
}) => {
  const wrapperRef = useRef<HTMLDivElement | EventTarget | null | any>(null);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onOutsideClick && onOutsideClick();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, onOutsideClick]);

  return <div ref={wrapperRef}>{children}</div>;
};
