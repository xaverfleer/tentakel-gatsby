import React from "react";
import { Helmet } from "react-helmet";

const AdminPage = () => {
  return (
    <>
      <Helmet>
        <title>Content Manager</title>
      </Helmet>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
    </>
  );
};

export default AdminPage;
