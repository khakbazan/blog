import { BackButton } from "@/common/back-button";
import { NewPost } from "@/components/posts/new-post";
import MainLayout from "@/layouts/main-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ایجاد پست جدید",
  description: "ایجاد پست جدید",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function NewPostPage() {
  return (
    <MainLayout>
      <BackButton />

      <NewPost />
    </MainLayout>
  );
}
