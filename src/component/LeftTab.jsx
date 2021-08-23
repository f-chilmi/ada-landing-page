import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function LeftTab(props) {

  // const sidebarCollapsed = localStorage.getItem('sidebar-collapsed')
  const [isExpanded, setIsExpanded] = React.useState(false)

  React.useEffect(() => {
    if (!props.isMobile) {
      setIsExpanded(true)
    }
  }, [])

  const path = "/dashboard"
  const { pathname } = useLocation()
  const menu = pathname.slice(11)

  const handleToggler = () => {
    if (isExpanded) {
      setIsExpanded(false)
      localStorage.setItem('sidebar-collapsed', true)
      return;
    }
    setIsExpanded(true)
    localStorage.removeItem('sidebar-collapse')
  }

  return (
    <div className={props.isMobile ? (isExpanded ? 'left-tabs' : 'left-tabs-hidden') : ('left-tabs')} >

      <div className="brand">
        {props.isMobile && ( <i className="material-icons text-white pointer" onClick={handleToggler} style={{ fontSize: 30 }} >menu</i> ) }
        {!props.isMobile && (<img src="/assets/logo_gram.png" alt="logo" onClick={() => window.location.href="/"} />)}
      </div>
          
      <div className={isExpanded ? '' : 'sidebar-hidden'} >
        <div className={menu === 'main' ? "t-selected centering-element text-white" : "tab-menu centering-element"}>
          <Link to={`${path}/main`}>
            <img src="/assets/icons/10.svg" alt="icons" />
          </Link>
        </div>
        

        <div className="empty-space" />

        <Link to={`${path}/live-pair`}>
          <div className={menu === 'live-pair' ? "t-selected centering-element text-white" : "tab-menu centering-element"}>
            <img src="/assets/icons/11.svg" alt="icons" />
          </div>
        </Link>
        <Link to="pair-explorer">
          <div className={menu === 'pair-explorer' ? "t-selected centering-element text-white" : "tab-menu centering-element"}>
            <img src="/assets/icons/12.svg" alt="icons" />
          </div>
        </Link>

        <div className="empty-space" />

        <Link to="multiswap">
          <div className={menu === 'multiswap' ? "t-selected centering-element text-white" : "tab-menu centering-element"}>
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
          <div className={menu === 'user' ? "t-selected centering-element text-white" : "tab-menu centering-element"}>
            <img src="/assets/icons/15.svg" alt="icons" />
          </div>
        </Link>
        <Link to="configuration">
          <div className={menu === 'configuration' ? "t-selected centering-element text-white" : "tab-menu centering-element"}>
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

    </div>
  )
}
