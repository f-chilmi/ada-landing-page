import React from 'react'
import { BrowserRouter as Router, Link, useRouteMatch, useLocation, Switch } from 'react-router-dom'
import Dashboard from './Dashboard'
import LivePairs from './LivePairs'
import Multiswap from './Multiswap'
import UserAccount from './UserAccount'
import PairExplorer from './PairExplorer'
import Configuration from './Configuration'

export default function Layout() {

  const { path } = useRouteMatch()
  const { pathname } = useLocation()
  const menu = pathname.slice(11)

  if (pathname === "/dashboard") {
    window.location.href = '/dashboard/main'
  }

  const url = [
    {
      name: "main",
      main: () => <Dashboard />
    },
    {
      name: "live-pair",
      main: () => <LivePairs />
    },
    {
      name: "pair-explorer",
      main: () => <PairExplorer />
    },
    {
      name: "multiswap",
      main: () => <Multiswap />
    },
    {
      name: "user",
      main: () => <UserAccount />
    },
    {
      name: "configuration",
      main: () => <Configuration />
    }
  ]
  console.log("pathname", pathname, useLocation())
  React.useEffect(() => {
    console.log(pathname)
  }, [pathname])

  return (
    <Router>
      {/* head */}
      <div className="top-h d-flex">
        <div className="brand">
          <img src="/assets/logo_gram.png" alt="logo" />
        </div>
        <div className="icon-cam centering-element">
          <i className="material-icons">photo_camera</i>
        </div>
      </div>

      {/* body  */}
      <div className="d-flex">

        {/* left tabs */}
        <div className="left-tabs">
          
          <div className="t-selected centering-element text-white">
            <Link to={`${path}/main`}>
              <img src="/assets/icons/10.svg" alt="icons" />
            </Link>
          </div>
          

          <div className="empty-space" />

          <Link to={`${path}/live-pair`}>
            <div className="tab-menu centering-element">
              <img src="/assets/icons/11.svg" alt="icons" />
            </div>
          </Link>
          <Link to="pair-explorer">
            <div className="tab-menu centering-element">
              <img src="/assets/icons/12.svg" alt="icons" />
            </div>
          </Link>

          <div className="empty-space" />

          <Link to="multiswap">
            <div className="tab-menu centering-element">
              <img src="/assets/icons/13.svg" alt="icons" />
            </div>
          </Link>
          <Link>
            <div className="tab-menu centering-element">
              <img src="/assets/icons/14.svg" alt="icons" />
            </div>
          </Link>

          <div className="empty-space" />

          <Link to="user">
            <div className="tab-menu centering-element">
              <img src="/assets/icons/15.svg" alt="icons" />
            </div>
          </Link>
          <Link to="configuration">
            <div className="tab-menu centering-element">
              <img src="/assets/icons/16.svg" alt="icons" />
            </div>
          </Link>

          <div className="empty-space" />

          <Link to="live-pair">
            <div className="tab-menu centering-element">
              <img src="/assets/icons/17.svg" alt="icons" />
            </div>
          </Link>

          <div className="empty-space" />
          
          <Link to="live-pair">
            <div className="tab-menu centering-element">
              <img src="/assets/icons/15.svg" alt="icons" />
            </div>
          </Link>
          <Link to="live-pair">
            <div className="tab-menu centering-element">
              <img src="/assets/icons/16.svg" alt="icons" />
            </div>
          </Link>

        </div>
      
        {/* right body  */}
        <div className="right-body">
          
          <div className="top-small">
            <div className="container d-flex justify-content-between">
              <div>icon</div>
              <div className="ms-auto">
                <span className="text-white">Next ADATShare: </span>
                <span className="text-blue">2021-09-01 - 1,252,964 ADAT </span>
                <span className="text-white">| Next Token Burn: </span>
                <span className="text-blue">2021-09-01 - 28,107 ADAT</span>
              </div>
            </div>
          </div>

          <Switch>
            {url.map(i => {
              if (i.name === menu) {
                return <i.main />
              }
              return null
            })}
          </Switch>

          {/* footer  */}
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

        </div>
      </div>
      
    </Router>
  )
}
