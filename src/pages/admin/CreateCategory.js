import React from "react";
import Layout from "../../components/layout/Layout";
import AdminMenu from "../../components/layout/AdminMenu";
function CreateCategory() {
  return (
    <Layout title={"Dashboard-Create-Category"}>
      <div container-fluid className="m-3 p-2">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="text-center w-50">
            <h1>Create Category</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CreateCategory;
