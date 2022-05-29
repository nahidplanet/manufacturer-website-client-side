import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import minus from "../../../assets/icons/minus-sign.png";
import plus from "../../../assets/icons/plus.png";
import auth from "../../../firebase.init";
import Loading from "../shared/Loading";

const AddReview = () => {
  const [user, loading] = useAuthState(auth);
  const [rating, setRating] = useState(5);
  const handleDecrease = () => {
    if (rating > 1) {
      setRating((rating) => rating - 0.5);
    }
  };
  const handleIncrease = () => {
    if (rating < 5) {
      setRating((rating) => rating + 0.5);
    }
  };
  if (loading) {
    return <Loading></Loading>;
  }
  const handleAddReview = (e) => {
    e.preventDefault();
    const reviewText = e.target.review.value;
    const review = {
      name: user.displayName,
      text: reviewText,
      rating: rating,
    };
    fetch(`https://guarded-reaches-90530.herokuapp.com/review`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Thanks For Your Compliment");
          e.target.reset();
        }
      });
  };
  return (
    <div className="max-w-xs mx-auto">
      <form onSubmit={handleAddReview} className="flex flex-col gap-2 my-8">
        <input
          type="text"
          value={user.displayName}
          readOnly
          className="input rounded-md border border-orange-600 w-full"
        />
        <textarea
          name="review"
          className="textarea rounded-md border border-orange-600 w-full"
          placeholder="Enter Your Review"
        ></textarea>
        <div className="pl-2 rounded-md border border-orange-600 flex w-44">
          <button
            type="button"
            onClick={handleDecrease}
            className="btn btn-ghost "
          >
            <img width={15} src={minus} alt="" />
          </button>
          <input type="text" value={rating} className="input w-16 text-lg " />
          <button
            type="button"
            onClick={handleIncrease}
            className="btn btn-ghost"
          >
            <img width={15} src={plus} alt="" />
          </button>
        </div>
        <input type="submit" value="Add" className="btn rounded-md border border-orange-600" />
      </form>
    </div>
  );
};

export default AddReview;
