import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";

export const PagenotFound = () => {
  return (
    <Layout>
      <div className="container">
        <h1 className="centered-div">404</h1>
        <h2 className="centered-div2">!ooopsss ! Page notFound</h2>
        <Link to="/" className="pnf-btn">
          Go Back
        </Link>
      </div>
    </Layout>
  );
};
