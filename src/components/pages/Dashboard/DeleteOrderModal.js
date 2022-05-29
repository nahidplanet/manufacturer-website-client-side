import React from "react";
import { toast } from "react-toastify";

const DeleteOrderModal = ({ deleteOrder, setDeleteOrder, refetch }) => {
  const { productName, _id } = deleteOrder;
  const handleDeleteOrder = () => {
    fetch(`https://protected-mountain-80420.herokuapp.com/order/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast("Your Order Delete");
          setDeleteOrder(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-2xl">Are you sure?</h3>
          <p className="py-4">
            you want to delete {productName} from your order!!
          </p>
          <div className="modal-action">
            <button onClick={handleDeleteOrder} className="btn btn-error">
              Delete
            </button>
            <label htmlFor="delete-modal" className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteOrderModal;
