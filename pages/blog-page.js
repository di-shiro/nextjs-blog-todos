import Layout from "../components/Layout";
import Link from "next/link";
import { getAllPostsData } from "../lib/posts";
import Post from "../components/Post";

// *****

import { getStaticPaths00, getStaticProps00 } from "./posts/test-blog-list";

export default function BlogPage({ filteredPosts }) {
  async function log() {
    // await console.log("■ getStaticPaths00", getStaticPaths00());
    // await console.log("■ getStaticProps00", getStaticProps00({ params: 1 }));
    await getStaticPaths00();
    await getStaticProps00({ params: { id: 1 } });
  }
  log();

  console.log("■ 0 : ", { filteredPosts });
  return (
    <Layout title="Blog Page">
      <ul>
        {filteredPosts &&
          filteredPosts.map((post) => <Post key={post.id} post={post} />)}
      </ul>

      <Link href="/main-page">
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

          <span>Back to main page</span>
        </div>
      </Link>
    </Layout>
  );
}
export async function getStaticProps() {
  const filteredPosts = await getAllPostsData();
  return {
    props: { filteredPosts: filteredPosts },
    revalidate: 3,
  };
}
