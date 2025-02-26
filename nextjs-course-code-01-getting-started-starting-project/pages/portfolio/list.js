import { useRouter } from "next/router";
import React from "react";
const ListPage = () => {
  const router = useRouter();
  console.log(router.pathname, router.query);
  return (
    <div>
      <h1>This is the List Page</h1>
    </div>
  );
};

export default ListPage;
