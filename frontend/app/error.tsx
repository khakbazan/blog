"use client";
import MainLayout from "@/layouts/main-layout";
import { BiError } from "react-icons/bi";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <MainLayout>
      <section className="flex flex-col gap-y-5 justify-center items-center min-h-screen">
        <BiError className="w-32 h-32 text-yellow-600" />

        <div className="flex flex-col items-center gap-y-2.5">
          <h2 className="text-center">متاسفانه مشکلی پیش آمده</h2>
          <button onClick={reset}>تلاش دوباره</button>
        </div>
      </section>
    </MainLayout>
  );
}
