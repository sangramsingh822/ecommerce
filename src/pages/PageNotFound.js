import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";

export default function PageNotFound() {
  return (
    <Layout title={"404-page not found"}>
      <div className="pnf">
        <h1 className="pnf-title">404</h1>
        <h3 className="pnf-heading">Oops! page Not Found</h3>
        <Link to="/" className="pnf-btn">
          Go Backx
        </Link>
      </div>
    </Layout>
  );
}
