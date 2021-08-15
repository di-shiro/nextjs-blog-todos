import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post00Test({ post }) {
  const router = useRouter();

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Layout title={post.title}>
      <p className="m-4">
        {"ID : "}
        {post.id}
      </p>

      <p className="mb-4 text-xl font-bold">{post.title}</p>
      <p className="mb-12">{post.created_at}</p>
      <p className="px-10">{post.content}</p>

      <Link href="/blog-page">
        <div className="flex cursor-pointer mt-12">
          <svg
            className="w-6 h-6 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            ></path>
          </svg>
          <span>Back to blog-page</span>
        </div>
      </Link>
    </Layout>
  );
}

export async function getStaticPaths00() {
  const paths = await getAllPostIds();
  console.log("test- ■ 0 paths : ", paths);

  await console.log("test- ■ 0 getStaticPaths00 : ", paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps00({ params }) {
  const { post: post } = await getPostData(params.id);

  await console.log("test- ■ 0 getStaticProps00 : ", post);

  return {
    props: {
      post,
    },
  };
}

/*
fallback: false となっている場合は、
存在しないIDのHTMLファイルにアクセスが有ったときに、
404.html を返すという設定。

例えば、
1.html , 2.html の2つのファイルがある場合、
仮に 3.html にアクセスが来た時、
404.html を返すということ。


 */
