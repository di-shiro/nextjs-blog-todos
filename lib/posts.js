import fetch from "node-fetch";

export async function getAllPostsData() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-post`)
  );

  const posts = await res.json();
  await console.log("■ 00 : ", posts);
  const filteredPosts = posts.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  return filteredPosts;
}

// ************************************************************************
/*
filteredPosts = posts.sort() の説明：
b - a > 0 となるなら、降順（値の大きい順、新しい順）の並びでソートされる
逆に
a - b < 0 となるなら、昇順になる。
*/
// ************************************************************************

export async function getAllPostIds() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-post`)
  );
  const posts = await res.json();
  return posts.map((post) => {
    return {
      params: { id: String(post.id) },
    };
  });
}

export async function getPostData(id) {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-post/${id}`)
  );
  const post = await res.json();

  return {
    post,
  };
}
