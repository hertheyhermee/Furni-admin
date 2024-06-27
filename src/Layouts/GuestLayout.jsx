import React from "react";
import { useStateContext } from "../Context/Context";
import { Navigate, Outlet } from "react-router-dom";

const GuestLayout = () => {
  const { token } = useStateContext();

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <div className="bg-primary d-flex justify-content-center align-items-center min-vh-100 p-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-4 col-md-5">
            <Outlet />
          </div>
          {/* <!-- end col --> */}
        </div>

        {/* <!-- end row --> */}
      </div>
    </div>
  );
};

export default GuestLayout;
