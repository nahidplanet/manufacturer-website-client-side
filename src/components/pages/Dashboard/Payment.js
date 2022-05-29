import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../shared/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L4ePHHZPMSZUwjmIimxrU8lc3mzxiLzJaXQ6eYt18X7UWHUP0ckXRDBGkRQpvrXEepKo4D5Hg12Md2D7rqSbmlU00uOyffoL7"
);

const Payment = () => {
  const { orderId } = useParams();
  const [user, loading] = useAuthState(auth);
  const { data: order, isLoading } = useQuery("payment", () =>
    fetch(`https://protected-mountain-80420.herokuapp.com/payment/${orderId}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading || loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="my-8">
      <div className="flex flex-col justify-center items-center gap-4">
        <input
          type="text"
          value={user.displayName}
          className="input rounded-md border border-orange-600 w-full max-w-xs"
        />
        <input
          type="email"
          value={user.email}
          readOnly
          className="input rounded-md border border-orange-600 w-full max-w-xs"
        />
        <input
          type="email"
          value={order?.productName}
          readOnly
          className="input rounded-md border border-orange-600 w-full max-w-xs"
        />
      </div>
      <div className="max-w-xs mx-auto mt-2">
        <label className="block">
          <span className="text-sm">
            Your Total Quantity: {order?.orderQty}
          </span>
        </label>

        <label>
          <span className="text-sm">
            Your Total Price Is:
            <span className="text-secondary font-semibold ml-1">
              ${order?.totalPrice}
            </span>
          </span>
        </label>
        <Elements stripe={stripePromise}>
          <CheckoutForm order={order}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
