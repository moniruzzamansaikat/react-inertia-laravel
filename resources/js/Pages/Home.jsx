import SiteLayout from "@/Layouts/SiteLayout";
import React from "react";

function Home() {
  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
}

Home.layout = (page) => (
  <SiteLayout title="Dashboard" children={page} />
);

export default Home;