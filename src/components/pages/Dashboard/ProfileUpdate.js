import React from "react";
import { toast } from "react-toastify";

const ProfileUpdate = ({ email }) => {
  const handleProfileUpdate = (e) => {
    e.preventDefault();
    const education = e.target.education.value;
    const address = e.target.address.value;
    const phone = e.target.phone.value;
    const linkedIn = e.target.linkedIn.value;
    const updateProfile = {
      education: education,
      address: address,
      phone: phone,
      linkedIn: linkedIn,
    };
    fetch(
      `https://protected-mountain-80420.herokuapp.com/updateUser/${email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(updateProfile),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast.success("Profile Updated");
        e.target.reset();
      });
  };

  return (
    <div className="mx-auto w-full lg:w-1/2">
      <h3 className="text-2xl font-semibold text-neutral text-center mb-4">
        Update Your Profile
      </h3>
      <form
        onSubmit={handleProfileUpdate}
        className="flex flex-col justify-center items-center gap-2"
      >
        <input
          type="text"
          name="education"
          placeholder="Education"
          className="input rounded-md border-secondary w-3/4"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Your Address"
          className="input rounded-md border-secondary w-3/4"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone number"
          className="input rounded-md border-secondary w-3/4"
          required
        />
        <input
          type="text"
          name="linkedIn"
          placeholder="Your LinkedIn Profile Link"
          className="input rounded-md border-secondary w-3/4"
          required
        />
        <input type="submit" value="Update" className="btn bg-[#1B1464] rounded-md text-white w-3/4" />
      </form>
    </div>
  );
};

export default ProfileUpdate;
