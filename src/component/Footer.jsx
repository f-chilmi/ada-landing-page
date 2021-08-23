import React from 'react'

export default function Footer() {
  return (
    <div className="bg-160b2c pt-5">
      <div className="container">
        <div className="footer-wrapper">
          <p className="footer-text">
            <span className="material-icons">copyright</span>
            <span className="vertical-super ms-1">ADA Tools 2021 - info@adatools.com | Ads & Marketing: marketing@adatools.com</span>    
          </p>

          <div className="soc-icon ">
            <div className="icon-wrapper-soc me-2">
              <img src="/assets/icons/moonfarmer.png" alt="logo" />
            </div>
            <div className="icon-wrapper-soc mx-2">
              <img src="/assets/icons/moonfarmer.png" alt="logo" />
            </div>
            <div className="icon-wrapper-soc ms-2">
              <img src="/assets/icons/moonfarmer.png" alt="logo" />
            </div>
          </div>  
        </div>
      </div>
    </div>

  )
}
