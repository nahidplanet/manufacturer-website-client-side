import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../firebase.init";
import Loading from "../../pages/shared/Loading";
import MyOrderCard from "./MyOrderCard";

const MyOrders = () => {
  const [user, loading] = useAuthState(auth);
  const [deleteOrder, setDeleteOrder] = useState({});
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(
      `https://protected-mountain-80420.herokuapp.com/order/${user?.email}`
    ).then((res) => res.json())
  );
  if (isLoading || loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 py-6">
      {orders.map((order) => (
        <MyOrderCard
          key={order._id}
          refetch={refetch}
          order={order}
          setDeleteOrder={setDeleteOrder}
          deleteOrder={deleteOrder}
        ></MyOrderCard>
      ))}
    </div>
  );
};

export default MyOrders;
