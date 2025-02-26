import { useRouter } from "next/router";
import React from "react";

const PortfolioProjectDetailsPage = () => {
  const router = useRouter();
  console.log(router.pathname, router.query);

  return (
    <div>
      <h1>This is the Portfolio Project Details Page</h1>
    </div>
  );
};

export default PortfolioProjectDetailsPage;
