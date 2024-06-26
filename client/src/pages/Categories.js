import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";

const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="container-fluid">
        <div className="row">
          {categories.map((c) => (
            <div
              className=" col-md-4 mt-5 mb-3 gx-3 gy-3 categories"
              key={c._id}
            >
              {/* <button className="btn btn-primary"> */}
              <Link to={`/category/${c.slug}`} className="btn btn-primary">
                {c.name}
              </Link>
              {/* </button> */}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
