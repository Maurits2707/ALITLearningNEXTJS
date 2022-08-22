import React from "react";
import { useRouter } from "next/router";

function portfolioPorjectPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>The Portfolio Porject Page</h1>
      <span>{router.query.projectid}</span>
    </div>
  );
}

export default portfolioPorjectPage;
