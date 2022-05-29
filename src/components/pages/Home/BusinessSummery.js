import React from "react";
import flag from "../../../assets/icons/flag.png";
import carParts from "../../../assets/icons/car-parts.png";
import users from "../../../assets/icons/user.png";

const BusinessSummery = () => {
  return (
    <div className="mb-12 py-20 p-8 bg-slate-100">
      
      <h4 className="text-lg font-semibold text-center text-[#EE5A24] capitalize">
      We Try To Understand Client Expectation
      </h4>
      <h1 className="text-5xl text-[#1B1464] font-bold text-center">
      Our Achievement
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-20 mx-12">
        <div className="bg-[#ee5a248c] rounded-md shadow-xl flex flex-col justify-center items-center p-4">
          <img width={70} src={flag} alt="Shoes" />
          <h4 className="text-2xl font-bold text-[#1B1464] mt-4">72+</h4>
          <h2 className="text-3xl font-bold text-[#EE5A24]
          ">Countries</h2>
        </div>
        <div className="bg-[#ee5a248c] rounded-md shadow-xl flex flex-col justify-center items-center p-4">
          <img width={70} src={carParts} alt="Shoes" />
          <h4 className="text-2xl font-bold text-[#1B1464] mt-4">450+</h4>
          <h2 className="text-3xl font-bold text-[#EE5A24]
          ">Complete Projects</h2>
        </div>
        <div className="bg-[#ee5a248c] rounded-md shadow-xl flex flex-col justify-center items-center p-4">
          <img width={70} src={users} alt="Shoes" />
          <h4 className="text-2xl font-bold text-[#1B1464] mt-4">355+</h4>
          <h2 className="text-3xl font-bold text-[#EE5A24]
          ">Happy Client</h2>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummery;
