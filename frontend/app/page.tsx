import { LastComments } from "@/components/landing/last-comments";
import { LastPosts } from "@/components/landing/last-posts";
import MainLayout from "@/layouts/main-layout";
import { generateMeta } from "@/utils/generateMeta";

export const metadata = generateMeta({
  title: "دنیای کلمات",
  description: "به دنیای کلمات خوش آمدید",
  category: "عمومی",
  keywords: ["مقاله", "آموزش"],
});

export default function Home() {
  return (
    <MainLayout>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <section className="lg:col-span-8">
          <LastPosts />
        </section>

        <aside className="hidden lg:block lg:col-span-4">
          <div className="sticky top-20">
            <LastComments />
          </div>
        </aside>
      </div>
    </MainLayout>
  );
}
