import React, { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../shared/Loading";
import DeleteOrderByAdminModal from "./DeleteOrderByAdminModal";

const ManageAllOrders = () => {
  const [deleteOrder, setDeleteOrder] = useState({});
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch("https://protected-mountain-80420.herokuapp.com/orders", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  const handleShipped = (id) => {
    fetch(
      `https://protected-mountain-80420.herokuapp.com/order/shipped/${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Order shipped");
          refetch();
        }
      });
  };

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
              <th>Email</th>
              <th>Product Name</th>
              <th>Order Quantity</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.customerEmail}</td>
                <td>{order.productName}</td>
                <td>{order.orderQty}</td>
                {order.paid ? (
                  <td>
                    {order.shipped ? (
                      <button className="btn btn-sm btn-primary">
                        Shipped
                      </button>
                    ) : (
                      <button
                        onClick={() => handleShipped(order._id)}
                        className="btn btn-sm btn-success text-gray-200"
                      >
                        Pending
                      </button>
                    )}
                  </td>
                ) : (
                  <td>
                    <button className="btn btn-sm">Unpaid</button>
                    <label
                      onClick={() => setDeleteOrder(order)}
                      htmlFor="delete-order-byAdmin-modal"
                      className="btn btn-sm btn-error ml-2 modal-button"
                    >
                      Delete
                    </label>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        {deleteOrder && (
          <DeleteOrderByAdminModal
            refetch={refetch}
            setDeleteOrder={setDeleteOrder}
            deleteOrder={deleteOrder}
          ></DeleteOrderByAdminModal>
        )}
      </div>
    </div>
  );
};

export default ManageAllOrders;
