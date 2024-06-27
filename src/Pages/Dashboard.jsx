import React from "react";

const Dashboard = () => {

  

  return (
    <div className="container-fluid">
      {/* <!-- start page title --> */}
      <div className="py-3 py-lg-4">
        <div className="row">
          <div className="col-lg-6">
            <h4 className="page-title mb-0">Dashboard</h4>
          </div>
          <div className="col-lg-6">
            <div className="d-none d-lg-block">
              <ol className="breadcrumb m-0 float-end">
                <li className="breadcrumb-item">
                  <a href="javascript: void(0);">Dashtrap</a>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- end page title --> */}

      <div className="row">
        <div className="col-md-6 col-xl-3">
          <div className="card">
            <div className="card-body">
              <div className="mb-4">
                <span className="badge badge-soft-primary float-end">Daily</span>
                <h5 className="card-title mb-0">Cost per Unit</h5>
              </div>
              <div className="row d-flex align-items-center mb-4">
                <div className="col-8">
                  <h2 className="d-flex align-items-center mb-0">$17.21</h2>
                </div>
                <div className="col-4 text-end">
                  <span className="text-muted">
                    12.5% <i className="mdi mdi-arrow-up text-success"></i>
                  </span>
                </div>
              </div>

              <div className="progress shadow-sm" style={{height: "5px"}}>
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{width: "57%"}}
                ></div>
              </div>
            </div>

            {/* <!--end card body--> */}
          </div>
          {/* <!-- end card--> */}
        </div>
        {/* <!-- end col--> */}

        <div className="col-md-6 col-xl-3">
          <div className="card">
            <div className="card-body">
              <div className="mb-4">
                <span className="badge badge-soft-primary float-end">Per Week</span>
                <h5 className="card-title mb-0">Market Revenue</h5>
              </div>
              <div className="row d-flex align-items-center mb-4">
                <div className="col-8">
                  <h2 className="d-flex align-items-center mb-0">$1875.54</h2>
                </div>
                <div className="col-4 text-end">
                  <span className="text-muted">
                    18.71% <i className="mdi mdi-arrow-down text-danger"></i>
                  </span>
                </div>
              </div>

              <div className="progress shadow-sm" style={{height: "5px"}}>
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{width: "57%"}}
                ></div>
              </div>
            </div>

            {/* <!--end card body--> */}
          </div>
          {/* <!-- end card--> */}
        </div>
        {/* <!-- end col--> */}

        <div className="col-md-6 col-xl-3">
          <div className="card">
            <div className="card-body">
              <div className="mb-4">
                <span className="badge badge-soft-primary float-end">
                  Per Month
                </span>
                <h5 className="card-title mb-0">Expenses</h5>
              </div>
              <div className="row d-flex align-items-center mb-4">
                <div className="col-8">
                  <h2 className="d-flex align-items-center mb-0">$784.62</h2>
                </div>
                <div className="col-4 text-end">
                  <span className="text-muted">
                    57% <i className="mdi mdi-arrow-up text-success"></i>
                  </span>
                </div>
              </div>

              <div className="progress shadow-sm" style={{height: "5px"}}>
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{width: "57%"}}
                ></div>
              </div>
            </div>

            {/* <!--end card body--> */}
          </div>

          {/* <!--end card--> */}
        </div>
        {/* <!-- end col--> */}

        <div className="col-md-6 col-xl-3">
          <div className="card">
            <div className="card-body">
              <div className="mb-4">
                <span className="badge badge-soft-primary float-end">All Time</span>
                <h5 className="card-title mb-0">Daily Visits</h5>
              </div>
              <div className="row d-flex align-items-center mb-4">
                <div className="col-8">
                  <h2 className="d-flex align-items-center mb-0">1,15,187</h2>
                </div>
                <div className="col-4 text-end">
                  <span className="text-muted">
                    17.8% <i className="mdi mdi-arrow-down text-danger"></i>
                  </span>
                </div>
              </div>

              <div className="progress shadow-sm" style={{height: "5px"}}>
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{width: "57%"}}
                ></div>
              </div>
            </div>

            {/* <!--end card body--> */}
          </div>
          {/* <!-- end card--> */}
        </div>
        {/* <!-- end col--> */}
      </div>
    </div>
  );
};

export default Dashboard;
