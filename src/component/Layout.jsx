import React from 'react'
import { BrowserRouter as Router, useLocation } from 'react-router-dom'
import Head from './Head'
import LeftTab from './LeftTab'
import Footer from './Footer'
import Body from './Body'

export default function Layout() {

  const { pathname } = useLocation()

  const [width, setWidth] = React.useState(window.screen.availWidth)
  const [tabTopSelected, setTabTopSelected] = React.useState('bsc')

  if (pathname === "/dashboard") {
    window.location.href = '/dashboard/main'
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, [])

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  }
  const isMobile = (width <= 768);

  let classRight = isMobile ? 'right-body bg-160b2c' : 'right-body desktop bg-160b2c'

  return (
    <Router>
      {/* head */}
      <Head isMobile={isMobile} />

      {/* body  */}
      <div className="d-flex position-relative h-100">

        <LeftTab isMobile={isMobile} tabTopSelected={tabTopSelected} setTabTopSelected={(val) => setTabTopSelected(val)} />

        {/* right body  */}
        <div className={`${classRight}`}>
          
          <div className="top-small">
            <div className="container d-flex justify-content-between">
              <div className="d-flex text-white">
                <div 
                  className={tabTopSelected === 'ether' ? "me-3 tab-top-selected" : "me-3 pointer"}
                  onClick={tabTopSelected !== 'ether' ? () => setTabTopSelected('ether'): null}
                >
                  <img src="/assets/icons/ether.svg" alt="ether" className="logo-ether" />
                  <p className="d-inline ms-1">Ether</p>
                </div>
                <div 
                  className={tabTopSelected === 'bsc' ? "me-3 tab-top-selected" : "me-3 pointer"}
                  onClick={tabTopSelected !== 'bsc' ? () => setTabTopSelected('bsc'): null}
                >
                  <img src="/assets/icons/bsc.png" alt="bsc" className="logo-ether" />
                  <p className="d-inline ms-1">BSC</p>
                </div>
                <div 
                  className={tabTopSelected === 'polygon' ? "me-3 tab-top-selected" : "me-3 pointer"}
                  onClick={tabTopSelected !== 'polygon' ? () => setTabTopSelected('polygon'): null}
                >
                  <img src="/assets/icons/polygon.png" alt="polygon" className="logo-ether" />
                  <p className="d-inline ms-1">Polygon</p>
                </div>
              </div>
              <div className={isMobile ? "d-none" :  "ms-auto"}>
                <span className="text-white">Next ADATShare: </span>
                <span className="text-blue">2021-09-01 - 1,252,964 ADAT </span>
                <span className="text-white">| Next Token Burn: </span>
                <span className="text-blue">2021-09-01 - 28,107 ADAT</span>
              </div>
            </div>
          </div>

          <Body tabTopSelected={tabTopSelected} />

          <Footer />
          
        </div>
      </div>
      
    </Router>
  )
}
