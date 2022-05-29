import React, { useEffect, useState } from "react";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../shared/Loading";
import ProfileUpdate from "./ProfileUpdate";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  const [dbUser, setDbUser] = useState({});
  useEffect(() => {
    fetch(
      `https://guarded-reaches-90530.herokuapp.com/user/${user.email}`
    ).then((res) =>
      res.json().then((data) => {
        setDbUser(data);
      })
    );
  }, [dbUser]);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="max-w m-8  flex lg:flex-row flex-col justify-center items-center gap-6">
      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl rounded-sm mx-auto">
        <div className="card-body">
          <h2 className="card-title">Name: {user.displayName}</h2>
          <div>
            <p>
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            {dbUser.education && (
              <p>
                <span className="font-semibold">Education:</span>{" "}
                {dbUser.education}
              </p>
            )}
            {dbUser.address && (
              <p>
                <span className="font-semibold">Address:</span> {dbUser.address}
              </p>
            )}
            {dbUser.phone && (
              <p>
                <span className="font-semibold">Phone:</span> {dbUser.phone}
              </p>
            )}
            {dbUser.linkedIn && (
              <p>
                <span className="font-semibold">LinkedIn:</span>
                <a href={dbUser.linkedIn} className="text-blue-500">
                  {" "}
                  {dbUser.linkedIn}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
      <ProfileUpdate email={user.email}></ProfileUpdate>
    </div>
  );
};

export default MyProfile;
