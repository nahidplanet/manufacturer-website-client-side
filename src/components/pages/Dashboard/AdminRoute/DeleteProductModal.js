import React from "react";
import { toast } from "react-toastify";

const DeleteProductModal = ({ deleteProduct, setDeleteProduct, refetch }) => {
  const { name, _id } = deleteProduct;
  const handleDeleteProduct = () => {
    fetch(`https://protected-mountain-80420.herokuapp.com/product/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.error("Product Deleted");
          setDeleteProduct(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="delete-order-byAdmin-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-2xl">Are you sure?</h3>
          <p className="py-4">
            you want to delete
            <span className="text-secondary"> {name}</span>!!!
          </p>
          <div className="modal-action">
            <button onClick={handleDeleteProduct} className="btn btn-error">
              Delete
            </button>
            <label htmlFor="delete-order-byAdmin-modal" className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProductModal;
