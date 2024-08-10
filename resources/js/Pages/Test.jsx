import SiteLayout from "@/Layouts/SiteLayout";
import React from "react";

function Test() {
  return (
    <div>
      <h1>Test page</h1>
    </div>
  );
}

Test.layout = page => <SiteLayout children={page} />

export default Test;