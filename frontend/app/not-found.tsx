import { Button } from "@/common/button";
import MainLayout from "@/layouts/main-layout";
import Link from "next/link";
import { TbError404 } from "react-icons/tb";

export default function NotFound() {
  return (
    <MainLayout>
      <section className="flex flex-col gap-y-3 justify-center items-center py-14">
        <TbError404 className="w-36 h-36 text-orange-600" />

        <div className="flex flex-col items-center gap-y-3">
          <h2 className="text-center">صفحه مدنظر شما یافت نشد</h2>
          <Link href="/">
            <Button>صفحه اصلی</Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
