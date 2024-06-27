import React, { useEffect, useState } from "react";
import axiosClient from "../axios/axiosClient";

const Users = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sn, setSn] = useState(null);

  const getUsers = () => {
    setLoading(true);

    axiosClient
      .get("/users")
      .then(({ data }) => {
        const usersWithSn = data.data.map((user, index) => ({
          ...user,
          sn: index + 1, // Adding serial number
        }));
        setUsers(usersWithSn);
        setLoading(false);
        console.log(usersWithSn);
      })
      .catch(({ error }) => {
        console.log(error);
        setLoading(false);
      });
  };

  const handleDelete = (id) => {
    axiosClient
      .delete(`/users/${id}`)
      .then(({ response }) => {
        setUsers(users.filter((user) => user.id != id));
        console.log(response);
      })
      .catch(({ error }) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1 className="py-4">Users</h1>
      <table id="basic-datatable" className="table dt-responsive nowrap w-100">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Email</th>
            <th>User ID</th>
            <th>Phone</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td colSpan="8">
                <div className="d-flex justify-content-center">
                  <div
                    className="spinner-border text-primary m-2"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              </td>
            </tr>
          ) : (
            users &&
            users.length > 0 &&
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.sn}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.id}</td>
                <td>{user.phone}</td>
                <td>
                  <span>
                    {user.createdAt.year}-{user.createdAt.year}
                  </span>{" "}
                  <span>{user.createdAt.time}</span>
                </td>
                <td>
                  <span>
                    {user.updatedAt.year}-{user.updatedAt.year}
                  </span>{" "}
                  <span>{user.updatedAt.time}</span>
                </td>
                <td>
                  {user.usertype == 0 ? (
                    <button
                      type="button"
                      className="btn btn-danger waves-effect waves-light"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  ) : null}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
