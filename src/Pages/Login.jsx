import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios/axiosClient";
import { useStateContext } from "../Context/Context";

const Login = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const { setToken, setUser } = useStateContext();
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    axiosClient.post('admin/login', payload)
    .then(
      ({data}) => {
        console.log(data)
        setUser(data.user)
        setToken(data.token)
      }
    )
    .catch((error) => {console.log(error)})
  }

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
      <div class="card">
        <div class="card-body p-4">
          <div class="text-center w-75 mx-auto auth-logo mb-4">
            <a class="logo-dark" href="index.html">
              <span>
                <img src="assets/images/logo-dark.png" alt="" height="22" />
              </span>
            </a>

            <a class="logo-light" href="index.html">
              <span>
                <img src="assets/images/logo-light.png" alt="" height="22" />
              </span>
            </a>
          </div>

          <form action="#" onSubmit={onSubmit}>
            <div class="form-group mb-3">
              <label class="form-label" for="emailaddress">
                Email address
              </label>
              <input
                class="form-control"
                type="email"
                id="emailaddress"
                required=""
                placeholder="Enter your email"
                onChange={(ev) => setPayload({ ...payload, email: ev.target.value })}
              />
            </div>

            <div class="form-group mb-3">
              <a class="text-muted float-end" href="pages-recoverpw.html">
                <small></small>
              </a>
              <label class="form-label" for="password">
                Password
              </label>
              <input
                class="form-control"
                type="password"
                required=""
                id="password"
                placeholder="Enter your password"
                onChange={(ev) => setPayload({ ...payload, password: ev.target.value })}
              />
            </div>

            <div class="form-group mb-3">
              <div class="">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="checkbox-signin"
                  checked
                />
                <label class="form-check-label ms-2" for="checkbox-signin">
                  Remember me
                </label>
              </div>
            </div>

            <div class="form-group mb-0 text-center">
              <button class="btn btn-primary w-100" type="submit">
                {" "}
                Log In{" "}
              </button>
            </div>
          </form>
        </div>
        {/* <!-- end card-body --> */}
      </div>

      {/* <!-- end card --> */}

      <div class="row mt-3">
        <div class="col-12 text-center">
          <p class="text-white-50">
            {" "}
            <a class="text-white-50 ms-1" href="pages-register.html">
              Forgot your password?
            </a>
          </p>
          <p class="text-white-50">
            Don't have an account?{" "}
            <Link class="text-white font-weight-medium ms-1" to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
        {/* <!-- end col --> */}
      </div>
    </div>
  );
};

export default Login;
