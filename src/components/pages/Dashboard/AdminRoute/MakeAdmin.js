import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../shared/Loading";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://protected-mountain-80420.herokuapp.com/users", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  const handleMakeAdmin = (email) => {
    fetch(
      `https://protected-mountain-80420.herokuapp.com/user/admin/${email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Add New Admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make Admin successfully");
          refetch();
        }
      });
  };
  return (
    <div className="w-5/6 my-8 lg:w-3/4 mx-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>{user.email}</td>
              <td>
                {user.role === "admin" ? (
                  <button className="btn btn-primary btn-sm">Admin</button>
                ) : (
                  <button
                    onClick={() => handleMakeAdmin(user.email)}
                    className="btn btn-sm"
                  >
                    Make Admin
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MakeAdmin;
