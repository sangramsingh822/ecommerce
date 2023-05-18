import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

export default function Layout({
  children,
  title,
  description,
  keywords,
  author,
}) {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>

      <Header />

      <main style={{ minHeight: "90vh" }}>
        <Toaster />
        {children}
      </main>

      <Footer />
    </>
  );
}

Layout.defualitProps = {
  title: "Ecommerce App",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb,express",
  author: "sangram",
};
