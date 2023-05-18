import React from "react";
import Layout from "../../components/layout/Layout";
import AdminMenu from "../../components/layout/AdminMenu";
function CreateProduct() {
  return (
    <Layout title={"Dashboard-Create-Product"}>
      <div container-fluid className="m-3 p-2">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="text-center w-50">
            <h1> Create Product</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CreateProduct;
