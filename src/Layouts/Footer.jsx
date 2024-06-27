import React, { useState } from "react";

const Footer = () => {
  const [date, setDate] = useState("");


  useState(() => {
    setDate(new Date().getFullYear());
  }, [])

  return (
    <footer class="footer">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            <div>
              {date} ©
              Dashtrap
            </div>
          </div>
          <div class="col-md-6">
            <div class="d-none d-md-flex gap-4 align-item-center justify-content-md-end">
              <p class="mb-0">
                Design & Develop by{" "}
                <a href="https://myrathemes.com/" target="_blank">
                  MyraStudio
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
