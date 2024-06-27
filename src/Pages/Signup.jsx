import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios/axiosClient";
import { useStateContext } from "../Context/Context";

const Signup = () => {
  const { token, setToken, user, setUser } = useStateContext();
  const [admin, setAdmin] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  });

  const onSubmit = (e) => {
    // debugger;
    e.preventDefault();

    axiosClient
      .post("/admin/signup", admin)
      .then(({ data }) => {
        setUser(data.data);
        setToken(data.data.token);
        console.log(user, token);
      })
      .catch(({ message }) => console.log(message));
  };
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const scriptUrls = [
    // "/assets/js/config.js",
    // "/assets/js/vendor.min.js",
    "/assets/js/app.js",
    // "/assets/libs/jquery-knob/jquery.knob.min.js",
    // "/assets/libs/jquery-sparkline/jquery.sparkline.min.js",
    // "/assets/libs/morris.js/morris.min.js",
    // "/assets/libs/raphael/raphael.min.js",
    // "/assets/js/pages/dashboard.js"
  ];

  useEffect(() => {
    // This function will run when the component mounts
    setIsPageLoaded(true);

    // Import and load your JavaScript script if the page has loaded
    if (isPageLoaded) {
      scriptUrls.forEach((scriptUrl) => {
        const script = document.createElement("script");
        script.src = scriptUrl;
        script.async = true;
        document.body.appendChild(script);
      });
    }
  }, [isPageLoaded]);

  return (
    <div>
      <div className="card">
        <div className="card-body p-4">
          <div className="text-center w-75 mx-auto auth-logo mb-4">
            <a className="logo-dark" href="index.html">
              <span>
                <img src="assets/images/logo-dark.png" alt="" height="22" />
              </span>
            </a>

            <a className="logo-light" href="index.html">
              <span>
                <img src="assets/images/logo-light.png" alt="" height="22" />
              </span>
            </a>
          </div>

          <form onSubmit={onSubmit}>
            <div className="form-group mb-3">
              <label className="form-label" for="name">
                Name
              </label>
              <input
                className="form-control"
                type="text"
                id="name"
                required=""
                placeholder="Enter your Name"
                onChange={(ev) => setAdmin({ ...admin, name: ev.target.value })}
              />
            </div>

            <div className="form-group mb-3">
              <label className="form-label" for="emailaddress">
                Email address
              </label>
              <input
                className="form-control"
                type="email"
                id="emailaddress"
                required=""
                placeholder="Enter your email"
                onChange={(ev) =>
                  setAdmin({ ...admin, email: ev.target.value })
                }
              />
            </div>

            <div className="form-group mb-3">
              <label className="form-label" for="emailaddress">
                Phone
              </label>
              <input
                className="form-control"
                type="number"
                id="emailaddress"
                required=""
                placeholder="Enter your mobile number"
                onChange={(ev) =>
                  setAdmin({ ...admin, phone: ev.target.value })
                }
              />
            </div>

            <div className="form-group mb-3">
              <a className="text-muted float-end" href="pages-recoverpw.html">
                <small></small>
              </a>
              <label className="form-label" for="password">
                Password
              </label>
              <input
                className="form-control"
                type="password"
                required=""
                id="password"
                placeholder="Enter your password"
                onChange={(ev) =>
                  setAdmin({ ...admin, password: ev.target.value })
                }
              />
            </div>

            <div className="form-group mb-3">
              <a className="text-muted float-end" href="pages-recoverpw.html">
                <small></small>
              </a>
              <label className="form-label" for="password">
                Password Confirmation
              </label>
              <input
                className="form-control"
                type="password"
                required=""
                id="password"
                placeholder="Enter your password"
                onChange={(ev) =>
                  setAdmin({ ...admin, password_confirmation: ev.target.value })
                }
              />
            </div>

            {/* <div className="form-group mb-3">
                                <div className="">
                                    <input className="form-check-input" type="checkbox" id="checkbox-signin" checked />
                                    <label className="form-check-label ms-2" for="checkbox-signin">I accept <a href="#">Terms and Conditions</a></label>
                                </div>
                            </div> */}

            <div className="form-group mb-0 text-center">
              <input className="btn btn-primary w-100" type="submit" value="Sign Up" />
                {" "}
                {" "}
              
            </div>
          </form>
        </div>
        {/* <!-- end card-body --> */}
      </div>

      {/* <!-- end card --> */}

      <div className="row mt-3">
        <div className="col-12 text-center">
          <p className="text-white-50">
            Already have an account ?{" "}
            <Link className="text-white font-weight-medium ms-1" to="/login">
              Log In
            </Link>
          </p>
        </div>
        {/* <!-- end col --> */}
      </div>
    </div>
  );
};

export default Signup;
