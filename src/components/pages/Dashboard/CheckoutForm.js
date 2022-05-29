import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  CardElement,
  Elements,
} from "@stripe/react-stripe-js";
import { toast } from "react-toastify";

const CheckoutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const { totalPrice, _id, customerName, customerEmail, productName } = order;
  useEffect(() => {
    fetch(
      "https://protected-mountain-80420.herokuapp.com/create-payment-intent",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ totalPrice }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data?.clientSecret);
        }
      });
  }, [totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    setCardError(error?.message || "");
    setSuccess("");

    // confirm payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: customerName,
            email: customerEmail,
          },
        },
      });

    if (intentError) {
      setCardError(intentError.message);
    } else {
      setCardError("");
      setSuccess("Congrats!! Your Payment Is Success");
      setTransactionId(paymentIntent.id);
      console.log(paymentIntent.id);

      // store payment data on db
      const order = {
        orderId: _id,
        transactionId: paymentIntent.id,
        productName: productName,
        customerName: customerName,
      };
      fetch(`https://protected-mountain-80420.herokuapp.com/order/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            toast.success("Payment Success");
            event.target.reset();
          }
        });
    }
  };

  return (
    <>
      <form className="mt-2" onSubmit={handleSubmit}>
        <CardElement
          className="input rounded-md border border-gray-800 pt-3"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn rounded-md border bg-green-600 text-gray-100 mt-4 block mx-auto"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
      {cardError && (
        <p className="text-red-500 text-center text-sm">{cardError}</p>
      )}
      {success && (
        <div className="text-green-500">
          {success}
          <p>
            Your Transaction Id Is:
            <span className="text-orange-500 text-center text-sm">
              {transactionId}
            </span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
