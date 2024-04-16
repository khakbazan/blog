"use client";

import { useState } from "react";

export function useCopy() {
  const [isCopied, setIsCopied] = useState(false);
  const [timedSuccess, setTimedSuccess] = useState(false);

  const [isError, setIsError] = useState(false);

  const copyToClipboard = (text: string) => {
    if ("clipboard" in navigator) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setIsCopied(true);
          setTimedSuccess(true);

          setTimeout(() => {
            setTimedSuccess(false);
          }, 2000);
        })
        .catch(() => {
          setIsError(true);
        });
    }
  };

  return {
    copyToClipboard,
    isCopied,
    isError,
    timedSuccess,
  };
}
