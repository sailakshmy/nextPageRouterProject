import { useRouter } from "next/router";
import React from "react";

const BlogPostPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>This is the Blog Post Page</h1>
    </div>
  );
};

export default BlogPostPage;
