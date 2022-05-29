import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../shared/Loading";
import DeleteProductModal from "./DeleteProductModal";

const ManageProducts = () => {
  const [deleteProduct, setDeleteProduct] = useState({});
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("manageProducts", () =>
    fetch("https://protected-mountain-80420.herokuapp.com/products", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="p-8">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Products Id</th>
              <th>Available Quantity</th>
              <th>Price Per Piece</th>
              <th>Delete Product</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product._id}>
                <th>{index + 1}</th>
                <td>{product.name}</td>
                <td>{product._id}</td>
                <td>{product.available}</td>
                <td>
                  ${product.price}
                  <span className="text-gray-400">/piece</span>
                </td>
                <td>
                  <label
                    onClick={() => setDeleteProduct(product)}
                    htmlFor="delete-order-byAdmin-modal"
                    className="btn btn-sm btn-error ml-2 modal-button"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteProduct && (
        <DeleteProductModal
          deleteProduct={deleteProduct}
          setDeleteProduct={setDeleteProduct}
          refetch={refetch}
        ></DeleteProductModal>
      )}
    </div>
  );
};

export default ManageProducts;
