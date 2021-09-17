import React from "react";
import CMS from "netlify-cms-app";

console.log("\n\n\n\nIn the browser: passed at /src/cms/cms.min.js\n\n\n\n\n");
debugger;
CMS.registerPreviewTemplate("artikel", () => <div>hello</div>);
