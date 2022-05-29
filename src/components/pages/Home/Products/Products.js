import React from "react";
import { useQuery } from "react-query";
import Loading from "../../shared/Loading";
import Product from "./Product";

const Products = () => {
  const { data: products, isLoading } = useQuery("products", () =>
    fetch("http://localhost:5000/products").then(
      (res) => res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="pt-40 mb-8 p-8 bg-base-100">
      <h4 className="text-lg font-semibold text-center text-[#EE5A24] capitalize">
        top sale in the week
      </h4>
      <h1 className="text-5xl text-[#1B1464] font-bold text-center">
        Feature Products
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:mx-8 mt-12 gap-8">
        {products?.slice(0, 6).map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
