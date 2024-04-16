import { BackButton } from "@/common/back-button";
import { PostBody } from "@/components/posts/post-body";
import { PostComments } from "@/components/posts/post-comments";
import MainLayout from "@/layouts/main-layout";
import { FetchPostResponse } from "@/models/posts/types";
import { generateMeta } from "@/utils/generateMeta";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

async function fetchPostData(id: string): Promise<FetchPostResponse> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`;

  const res = await fetch(url, {
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

// we generate needed page meta dynamicly for SEO
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = await fetchPostData(params.id);

  return generateMeta({
    title: post?.title,
    description: "توضیحات تستی متا",
    keywords: ["کیوورد دوم", "کیوورد اول"],
    slug: `post/${params?.id}`,
    category: "دسته بندی",
  });
}

export default async function SinglePostPage({ params }: PageProps) {
  const post = await fetchPostData(params.id);

  return (
    <MainLayout>
      <BackButton />

      <article className="box" role="article" lang="fa">
        <PostBody
          body={post?.body}
          image="/images/post-cover.png"
          title={post?.title}
          author={post?.author}
          createdAt={post?.createdAt}
          postId={post?.id}
          hashtags={post?.hashtags}
        />

        <PostComments postId={post?.id} />
      </article>
    </MainLayout>
  );
}
