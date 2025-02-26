import { useRouter } from "next/router";
import React from "react";

const ClientProjectDetailsPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>This is the client's project specific details page</h1>
    </div>
  );
};

export default ClientProjectDetailsPage;
