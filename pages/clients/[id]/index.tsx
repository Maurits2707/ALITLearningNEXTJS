import React from "react";
import { useRouter } from "next/router"

function clientProjectsPage() {
  const router = useRouter()
  function loadProjectHandler(){
    //load data
    router.push("/clients/maurits/ProjectA")
  }
  return (
    <div>
      <h1>The Client Projects Page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default clientProjectsPage;
