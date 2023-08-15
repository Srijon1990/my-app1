import Link from "next/link";
import React from "react";

async function postsData() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=8"
  );
  if (!res.ok) {
    throw new error("Data fatching fails for all posts");
  }
  return res.json();
}

const Page = async () => {
  const posts = await postsData();

  return (
    <div className="w-[90%] m-auto">
      <h1 className="font-bold">Blog Posts written Here......... </h1>
      <div>
        {posts.map((post, i) => {
          return (
            <p key={i.toString()} className="mt-5">
              <Link href={`/blog/${post.id}`}>
                {post.id} - {post.title}
              </Link>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
