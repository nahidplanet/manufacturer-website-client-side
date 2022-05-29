import React from "react";
import { Link } from "react-router-dom";





const SpecialOffer = () => {
  const car1 = "https://i.ibb.co/q7vwL5H/car1.jpg";
  const car2 = "https://i.ibb.co/wgtjhPy/car2.webp";
  const car3 = "https://i.ibb.co/5jqpXZL/car3.webp";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      <Link to="/mercideze">
        <img src={car1} alt="" className="h-[330px]" />
      </Link>
      <Link to="/bmw">
        <img src={car2} alt="" className="h-[330px]" />
      </Link>
      <Link to="/ferrari">
        <img src={car3} alt="" className="h-[330px]" />
      </Link>
    </div>
  );
};

export default SpecialOffer;
