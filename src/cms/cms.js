import CMS from "netlify-cms-app";
import ArticlePreview from "./preview-templates/ArticlePreview";

console.log("\n\n\n\nIn the browser: passed at /src/cms/cms.min.js\n\n\n\n\n");
debugger;
CMS.registerPreviewTemplate("artikel", ArticlePreview);
