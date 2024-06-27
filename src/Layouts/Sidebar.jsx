import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState(false);
  const sideNav = [
    { link: "dashboard", to: "/", icon: "bx bx-home-smile" },
    { link: "products", to: "/products", icon: "bx bx-cart", badge: "01" },
    { link: "users", to: "/users", icon: "bx bx-user" },
  ];

  return (
    <div className="main-menu">
      {/* <!-- Brand Logo --> */}
      <div className="logo-box">
        {/* <!-- Brand Logo Light --> */}
        <Link className="logo-light" to="/">
          <img
            src="/assets/images/logo-light.png"
            alt="logo"
            className="logo-lg"
            height="28"
          />
          <img
            src="/assets/images/logo-sm.png"
            alt="small logo"
            className="logo-sm"
            height="28"
          />
        </Link>

        {/* <!-- Brand Logo Dark --> */}
        <Link className="logo-dark" href="index.html">
          <img
            src="/assets/images/logo-dark.png"
            alt="dark logo"
            className="logo-lg"
            height="28"
          />
          <img
            src="/assets/images/logo-sm.png"
            alt="small logo"
            className="logo-sm"
            height="28"
          />
        </Link>
      </div>

      {/* <!--- Menu --> */}
      <div data-simplebar>
        <ul className="app-menu">
          <li className="menu-title">Menu</li>

          {sideNav &&
            sideNav.length > 0 &&
            sideNav.map((item) => (
              <li key={item.link} className="menu-item">
                <Link
                  className="menu-link waves-effect waves-light text-capitalize"
                  to={item.to}
                >
                  <span className="menu-icon">
                    <i className={item.icon}></i>
                  </span>
                  <span className="menu-text"> {item.link} </span>
                  {item.badge ? (
                    <span className="badge bg-primary rounded ms-auto">
                      {" "}
                      {item.badge}{" "}
                    </span>
                  ) : null}
                </Link>
              </li>
            ))}


          {/* <li className="menu-title">Custom</li>

                    <li className="menu-item">
                        <a className='menu-link waves-effect waves-light' href='apps-calendar.html'>
                            <span className="menu-icon"><i className="bx bx-calendar"></i></span>
                            <span className="menu-text"> Calendar </span>
                        </a>
                    </li>

                    <li className="menu-item">
                        <a href="#menuExpages" data-bs-toggle="collapse" className="menu-link waves-effect waves-light">
                            <span className="menu-icon"><i className="bx bx-file"></i></span>
                            <span className="menu-text"> Extra Pages </span>
                            <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="menuExpages">
                            <ul className="sub-menu">
                                <li className="menu-item">
                                    <a className='menu-link' href='pages-starter.html'>
                                        <span className="menu-text">Starter</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='pages-invoice.html'>
                                        <span className="menu-text">Invoice</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='pages-login.html'>
                                        <span className="menu-text">Log In</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='pages-register.html'>
                                        <span className="menu-text">Register</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='pages-recoverpw.html'>
                                        <span className="menu-text">Recover Password</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='pages-lock-screen.html'>
                                        <span className="menu-text">Lock Screen</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='pages-404.html'>
                                        <span className="menu-text">Error 404</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='pages-500.html'>
                                        <span className="menu-text">Error 500</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="menu-item">
                        <a href="#menuLayouts" data-bs-toggle="collapse" className="menu-link waves-effect waves-light">
                            <span className="menu-icon"><i className="bx bx-layout"></i></span>
                            <span className="menu-text"> Layouts </span>
                            <span className="badge bg-blue ms-auto">New</span>
                        </a>
                        <div className="collapse" id="menuLayouts">
                            <ul className="sub-menu">
                                <li className="menu-item">
                                    <a className='menu-link' href='layout-horizontal.html'>
                                        <span className="menu-text">Horizontal</span>
                                    </a>
                                </li>

                                <li className="menu-item">
                                    <a className='menu-link' href='layout-sidenav-light.html'>
                                        <span className="menu-text">Sidenav Light</span>
                                    </a>
                                </li>

                                <li className="menu-item">
                                    <a className='menu-link' href='layout-sidenav-dark.html'>
                                        <span className="menu-text">Sidenav Dark</span>
                                    </a>
                                </li>

                                <li className="menu-item">
                                    <a className='menu-link' href='layout-topbar-dark.html'>
                                        <span className="menu-text">Topbar Dark</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="menu-title">Components</li>

                    <li className="menu-item">
                        <a href="#menuComponentsui" data-bs-toggle="collapse" className="menu-link waves-effect waves-light">
                            <span className="menu-icon"><i className="bx bx-cookie"></i></span>
                            <span className="menu-text"> UI Elements </span>
                            <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="menuComponentsui">
                            <ul className="sub-menu">
                                <li className="menu-item">
                                    <a className='menu-link' href='ui-alerts.html'>
                                        <span className="menu-text">Alerts</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='ui-buttons.html'>
                                        <span className="menu-text">Buttons</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='ui-cards.html'>
                                        <span className="menu-text">Cards</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='ui-carousel.html'>
                                        <span className="menu-text">Carousel</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='ui-dropdowns.html'>
                                        <span className="menu-text">Dropdowns</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='ui-video.html'>
                                        <span className="menu-text">Embed Video</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='ui-general.html'>
                                        <span className="menu-text">General UI</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='ui-grid.html'>
                                        <span className="menu-text">Grid</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='ui-images.html'>
                                        <span className="menu-text">Images</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='ui-list-group.html'>
                                        <span className="menu-text">List Group</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='ui-modals.html'>
                                        <span className="menu-text">Modals</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='ui-offcanvas.html'>
                                        <span className="menu-text">Offcanvas</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='ui-placeholders.html'>
                                        <span className="menu-text">Placeholders</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='ui-progress.html'>
                                        <span className="menu-text">Progress</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='ui-spinners.html'>
                                        <span className="menu-text">Spinners</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='ui-tabs-accordions.html'>
                                        <span className="menu-text">Tabs & Accordions</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='ui-tooltips-popovers.html'>
                                        <span className="menu-text">Tooltips & Popovers</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='ui-typography.html'>
                                        <span className="menu-text">Typography</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="menu-item">
                        <a href="#menuExtendedui" data-bs-toggle="collapse" className="menu-link waves-effect waves-light">
                            <span className="menu-icon"><i className="bx bx-briefcase-alt-2"></i></span>
                            <span className="menu-text"> Components </span>
                            <span className="badge bg-info ms-auto">Hot</span>
                        </a>
                        <div className="collapse" id="menuExtendedui">
                            <ul className="sub-menu">
                                <li className="menu-item">
                                    <a className='menu-link' href='components-range-slider.html'>
                                        <span className="menu-text">Range Slider</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='components-sweet-alert.html'>
                                        <span className="menu-text">Sweet Alert</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='components-loading-buttons.html'>
                                        <span className="menu-text">Loading Buttons</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="menu-item">
                        <a href="#menuIcons" data-bs-toggle="collapse" className="menu-link waves-effect waves-light">
                            <span className="menu-icon"><i className="bx bx-aperture"></i></span>
                            <span className="menu-text"> Icons </span>
                            <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="menuIcons">
                            <ul className="sub-menu">
                                <li className="menu-item">
                                    <a className='menu-link' href='icons-feather.html'>
                                        <span className="menu-text">Feather Icons</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='icons-mdi.html'>
                                        <span className="menu-text">Material Design Icons</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='icons-dripicons.html'>
                                        <span className="menu-text">Dripicons</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="menu-item">
                        <a href="#menuForms" data-bs-toggle="collapse" className="menu-link waves-effect waves-light">
                            <span className="menu-icon"><i className="bx bxs-eraser"></i></span>
                            <span className="menu-text"> Forms </span>
                            <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="menuForms">
                            <ul className="sub-menu">
                                <li className="menu-item">
                                    <a className='menu-link' href='forms-elements.html'>
                                        <span className="menu-text">General Elements</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='forms-advanced.html'>
                                        <span className="menu-text">Advanced</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='forms-validation.html'>
                                        <span className="menu-text">Validation</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='forms-quilljs.html'>
                                        <span className="menu-text">Editor</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='forms-file-uploads.html'>
                                        <span className="menu-text">File Uploads</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="menu-item">
                        <a href="#menuTables" data-bs-toggle="collapse" className="menu-link waves-effect waves-light">
                            <span className="menu-icon"><i className="bx bx-table"></i></span>
                            <span className="menu-text"> Tables </span>
                            <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="menuTables">
                            <ul className="sub-menu">
                                <li className="menu-item">
                                    <a className='menu-link' href='tables-basic.html'>
                                        <span className="menu-text">Basic Tables</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='tables-datatables.html'>
                                        <span className="menu-text">Data Tables</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="menu-item">
                        <a href="#menuCharts" data-bs-toggle="collapse" className="menu-link waves-effect waves-light">
                            <span className="menu-icon"><i className="bx bx-doughnut-chart"></i></span>
                            <span className="menu-text"> Charts </span>
                            <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="menuCharts">
                            <ul className="sub-menu">
                                <li className="menu-item">
                                    <a className='menu-link' href='charts-apex.html'>
                                        <span className="menu-text">Apex Charts</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='charts-morris.html'>
                                        <span className="menu-text">Morris Charts</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='charts-chartjs.html'>
                                        <span className="menu-text">Chartjs Charts</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="menu-item">
                        <a href="#menuMaps" data-bs-toggle="collapse" className="menu-link waves-effect waves-light">
                            <span className="menu-icon"><i className="bx bx-map-alt"></i></span>
                            <span className="menu-text"> Maps </span>
                            <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="menuMaps">
                            <ul className="sub-menu">
                                <li className="menu-item">
                                    <a className='menu-link' href='maps-google.html'>
                                        <span className="menu-text">Google Maps</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className='menu-link' href='maps-vector.html'>
                                        <span className="menu-text">Vector Maps</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="menu-item">
                        <a href="#menuMultilevel" data-bs-toggle="collapse" className="menu-link waves-effect waves-light">
                            <span className="menu-icon"><i className="bx bx-share-alt"></i></span>
                            <span className="menu-text"> Multi Level </span>
                            <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="menuMultilevel">
                            <ul className="sub-menu">
                                <li className="menu-item">
                                    <a href="#menuMultilevel2" data-bs-toggle="collapse"
                                        className="menu-link waves-effect waves-light">
                                        <span className="menu-text"> Second Level </span>
                                        <span className="menu-arrow"></span>
                                    </a>
                                    <div className="collapse" id="menuMultilevel2">
                                        <ul className="sub-menu">
                                            <li className="menu-item">
                                                <a href="javascript: void(0);" className="menu-link">
                                                    <span className="menu-text">Item 1</span>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="javascript: void(0);" className="menu-link">
                                                    <span className="menu-text">Item 2</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="menu-item">
                                    <a href="#menuMultilevel3" data-bs-toggle="collapse"
                                        className="menu-link waves-effect waves-light">
                                        <span className="menu-text">Third Level</span>
                                        <span className="menu-arrow"></span>
                                    </a>
                                    <div className="collapse" id="menuMultilevel3">
                                        <ul className="sub-menu">
                                            <li className="menu-item">
                                                <a href="javascript: void(0);" className="menu-link">
                                                    <span className="menu-text">Item 1</span>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="#menuMultilevel4" data-bs-toggle="collapse"
                                                    className="menu-link waves-effect waves-light">
                                                    <span className="menu-text">Item 2</span>
                                                    <span className="menu-arrow"></span>
                                                </a>
                                                <div className="collapse" id="menuMultilevel4">
                                                    <ul className="sub-menu">
                                                        <li className="menu-item">
                                                            <a href="javascript: void(0);" className="menu-link">
                                                                <span className="menu-text">Item 1</span>
                                                            </a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="javascript: void(0);" className="menu-link">
                                                                <span className="menu-text">Item 2</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
