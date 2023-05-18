import React from "react";
import AdminMenu from "../../components/layout/AdminMenu";
import Layout from "../../components/layout/Layout";
import { UseAuth } from "../../context/AuthProvider";


export default function Admindashboard() {
const [auth] = UseAuth();

  return (
    <Layout title={"Dashboard-Admin"}>
      <div container-fluid className="m-3 p-2">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu/>
          </div>

          <div className="col-md-9">
            <div className="card text-center w-75 p-3 mt-3">
              <h1>
                {auth?.user?.name}
              </h1>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
