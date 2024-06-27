import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {

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
    <div className="bg-primary d-flex justify-content-center align-items-center min-vh-100 p-5">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-xl-4 col-md-5">
                <div className="card">
                    <div className="card-body p-4">

                        <div className="text-center w-75 mx-auto auth-logo mb-4">
                            <a className='logo-dark' href='index.html'>
                                <span><img src="/assets/images/logo-dark.png" alt="" height="22" /></span>
                            </a>

                            <a className='logo-light' href='index.html'>
                                <span><img src="/assets/images/logo-light.png" alt="" height="22" /></span>
                            </a>
                        </div>

                        <div className="text-center w-50 mx-auto my-4">
                            <img src="/assets/images/404-error.svg" title="invite.svg" />
                        </div>

                        <h3 className="text-center mb-4 mt-3">Page Not Found</h3>

                        <p className="text-muted text-center mt-3"> It's looking like you may have taken a wrong turn. Don't worry... it happens to the best of us. You might want to check your internet connection. </p>
                        <div className="mt-4 text-center">
                            <Link className='btn btn-primary w-100' to='/'>Back to Home</Link>
                        </div>

                    </div> 
                    {/* <!-- end card-body --> */}
                </div>
                
                {/* <!-- end card --> */}
            </div> 
            {/* <!-- end col --> */}
        </div>
        
        {/* <!-- end row --> */}
    </div>
    
    {/* <!-- end container --> */}

    
    {/* <!-- App js --> */}

</div>
  )
}

export default NotFound