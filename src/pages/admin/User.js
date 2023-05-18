import React from "react";
import AdminMenu from "../../components/layout/AdminMenu";
import Layout from "../../components/layout/Layout";
function User() {
  return (
    <Layout title={"Dashboard-All-Users"}>
      <div container-fluid className="m-3 p-2">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="text-center w-50">
            <h1>All users</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default User;
