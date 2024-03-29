import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Helmet } from "react-helmet";
const Layout = ({ children, description, keywords, author, title }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />

        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />

        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "76vh" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
