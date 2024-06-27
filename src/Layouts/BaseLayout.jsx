import React, { useEffect, useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Navigate, Outlet } from 'react-router-dom'
import Footer from './Footer'
import { useStateContext } from '../Context/Context'

const BaseLayout = () => {
    const { token } = useStateContext();

    if(!token) {
        return <Navigate to="/login" />
    }
    
    const [isPageLoaded, setIsPageLoaded] = useState(false);
    
    const scriptUrls =  [
        // "/assets/js/config.js",
        // "/assets/js/vendor.min.js",
        "/assets/js/app.js",
        // "/assets/libs/jquery-knob/jquery.knob.min.js",
        // "/assets/libs/jquery-sparkline/jquery.sparkline.min.js",
        // "/assets/libs/morris.js/morris.min.js",
        // "/assets/libs/raphael/raphael.min.js",
        "/assets/js/pages/dashboard.js"
    ]

    useEffect(() => {
        // This function will run when the component mounts
        setIsPageLoaded(true);

        // Import and load your JavaScript script if the page has loaded
        if (isPageLoaded) {
            scriptUrls.forEach(scriptUrl => {
                const script = document.createElement('script');
                script.src = scriptUrl;
                script.async = true;
                document.body.appendChild(script);
            });
        }
    }, [isPageLoaded]);

  return (
    <div className="layout-wrapper">
        <Sidebar />
        <div className="page-content">
            <Header />
            <div className="px-3">
                {/* <!-- Start Content--> */}
                <div className="container-fluid">
                    <Outlet />
                </div>
            </div>   
            <Footer />
        </div>
    </div>
  )
}

export default BaseLayout