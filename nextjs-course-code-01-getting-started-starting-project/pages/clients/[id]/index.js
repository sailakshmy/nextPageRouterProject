import { useRouter } from "next/router";
import React from "react";

const ClientProjectsPage = () => {
  const router = useRouter();
  console.log(router.query);
  function loadProjectHandler() {
    // router.push(`/clients/${router.query.id}/projectA`);
    router.push({
      pathname: "/clients/[id]/[clientProjectId]",
      query: {
        id: router.query.id,
        clientProjectId: "projectB",
      },
    });
  }
  return (
    <div>
      <h1>The projects of a given client</h1>
      <button onClick={loadProjectHandler}>Load the project</button>
    </div>
  );
};

export default ClientProjectsPage;
