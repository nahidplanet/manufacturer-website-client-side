import React from "react";
import homeBanner from "../../../assets/bannerbg.jpg";

const HomeBanner = () => {
  return (
    <div>
      <div
        className="hero h-[60vh]"
        style={{ backgroundImage: `url(${homeBanner})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-[#fff] ">
              Welcome To Auto Parts Store
            </h3>
            <h1 className="text-5xl text-[#EE5A24] font-bold">Find The Right Parts</h1>
            <p className="my-8 text-lg text-white">
              we carry over 250 of the world's highest quality automotive parts
              brands across 42 product catagories
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-md mx-auto mb-[-130px] mt-[-50px] relative z-20 bg-[#EE5A24] shadow-lg p-10 w-5/6">
        <h1 className="text-2xl mb-5 text-white font-bold">
          Select Your Vehicles
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
          <input
            type="text"
            placeholder="Make"
            className="input rounded-sm w-full"
          />
          <input
            type="number"
            placeholder="Year"
            className="input rounded-sm w-full"
          />
          <input
            type="text"
            placeholder="Model"
            className="input rounded-sm w-full"
          />
          <input
            type="text"
            placeholder="Engine Model"
            className="input rounded-sm w-full"
          />
          <input
            className="btn rounded-sm text-white"
            type="submit"
            value="Find My Parts"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
