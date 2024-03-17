import React from "react";
import Layout from "../components/Layout/Layout";

export const About = () => {
  return (
    <Layout title={"shop now"}>
      <div>
        <h1>this is about</h1>
      </div>
    </Layout>
  );
};

Layout.defaultProps = {
  title: "Ecommerce app",
  description: "mern stack project",
  keywordsL: "mern,react,node,mongodb",
  author: "Avinabh",
};
