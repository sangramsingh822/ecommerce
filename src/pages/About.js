import React from "react";
import Layout from "../components/layout/Layout";
import { UseAuth } from "../context/AuthProvider";

export default function About() {
  const [auth, setauth] = UseAuth();

  return (
    <Layout title={"About us -Leo Tech"}>
      <h1>About</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
}
