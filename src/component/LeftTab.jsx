import React from 'react'
import { Link, useLocation, useParams, useRouteMatch } from 'react-router-dom'

export default function LeftTab(props) {

  // const sidebarCollapsed = localStorage.getItem('sidebar-collapsed')
  // const [isExpanded, setIsExpanded] = React.useState(false)

  // React.useEffect(() => {
  //   if (!props.isMobile) {
  //     setIsExpanded(true)
  //   }
  // }, [props])

  const { parent, child } = useParams()

  // const handleToggler = () => {
  //   if (isExpanded) {
  //     setIsExpanded(false)
  //     localStorage.setItem('sidebar-collapsed', true)
  //     return;
  //   }
  //   setIsExpanded(true)
  //   localStorage.removeItem('sidebar-collapse')
  // }

  const goToLandingPage = () => {
    window.location.href="/"
  }

  const etherSidebar = [
    {
      icon: "/assets/icons/10.svg",
      name: 'ADATBOARD',
      to: 'main'
    },
    {
      icon: '',
      name: 'Uniswap',
      to: ''
    },
    {
      icon: '/assets/icons/11.svg',
      name: 'Live New Pairs',
      to: 'uni-live-pair'
    },
    {
      icon: '/assets/icons/12.svg',
      name: 'Pair Explorer',
      to: 'uni-pair-explorer'
    },
    {
      icon: '/assets/icons/03.svg',
      name: 'Big Swap Explorer',
      to: 'uni-big-swap'
    },
    {
      icon: '',
      name: 'Sushiswap',
      to: 'sushiswap'
    },
    {
      icon: '/assets/icons/11.svg',
      name: 'Live New Pairs',
      to: 'sushi-live-pair'
    },
    {
      icon: '/assets/icons/12.svg',
      name: 'Pair Explorer',
      to: 'sushi-pair-explorer'
    },
    {
      icon: '/assets/icons/03.svg',
      name: 'Big Swap Explorer',
      to: 'sushi-big-swap'
    },
    {
      icon: '',
      name: 'Common',
      to: 'common'
    },
    {
      icon: '/assets/icons/13.svg',
      name: 'Multiswap',
      to: 'multiswap'
    },
    {
      icon: '/assets/icons/14.svg',
      name: 'New Pairs Bot',
      to: 'new-pair-bot'
    },
    {
      icon: '',
      name: 'Others',
      to: 'other'
    },
    {
      icon: '/assets/icons/15.svg',
      name: 'User Account',
      to: 'user'
    },
    {
      icon: '/assets/icons/16.svg',
      name: 'Configuration',
      to: 'configuration'
    },
    {
      icon: '',
      name: 'Theme',
      to: 'theme'
    },
    {
      icon: '/assets/icons/17.svg',
      name: 'Theme Mode',
      to: 'theme'
    },
    {
      icon: '/assets/icons/bsc.png',
      name: 'BSC',
      to: {
        pathname: '/app/bsc/main'
      }
    },
    {
      icon: '/assets/icons/polygon.png',
      name: 'Polygon',
      to: {
        pathname: '/app/bsc/polygon'
      }
    }
  ]

  const bscSidebar = [
    {
      icon: "/assets/icons/10.svg",
      name: 'ADATBOARD',
      to: 'main'
    },
    {
      icon: '',
      name: 'Pancakeswap',
      to: ''
    },
    {
      icon: '/assets/icons/11.svg',
      name: 'Live New Pairs',
      to: 'live-pair'
    },
    {
      icon: '/assets/icons/12.svg',
      name: 'Pair Explorer',
      to: 'pair-explorer'
    },
    {
      icon: '',
      name: 'Common',
      to: ''
    },
    {
      icon: '/assets/icons/13.svg',
      name: 'Multiswap',
      to: 'multiswap'
    },
    {
      icon: '/assets/icons/14.svg',
      name: 'New Pairs Bot',
      to: ''
    },
    {
      icon: '',
      name: 'Others',
      to: ''
    },
    {
      icon: '/assets/icons/15.svg',
      name: 'User Account',
      to: 'user'
    },
    {
      icon: '/assets/icons/16.svg',
      name: 'Configuration',
      to: 'configuration'
    },
    {
      icon: '',
      name: 'Theme',
      to: ''
    },
    {
      icon: '/assets/icons/17.svg',
      name: 'Theme Mode',
      to: ''
    },
    {
      icon: '/assets/icons/ether.svg',
      name: 'Ether',
      to: {
        pathname: '/app/ether/main'
      }
    },
    {
      icon: '/assets/icons/polygon.png',
      name: 'Polygon',
      to: {
        pathname: `/app/polygon/${child}`
      }
    }
  ]

  const polySidebar = [
    {
      icon: "/assets/icons/10.svg",
      name: 'ADATBOARD',
      to: 'main'
    },
    {
      icon: '',
      name: 'Quickswap',
      to: ''
    },
    {
      icon: '/assets/icons/11.svg',
      name: 'Live New Pairs',
      to: 'live-pair'
    },
    {
      icon: '/assets/icons/12.svg',
      name: 'Pair Explorer',
      to: 'pair-explorer'
    },
    {
      icon: '',
      name: 'Common',
      to: ''
    },
    {
      icon: '/assets/icons/13.svg',
      name: 'Multiswap',
      to: 'multiswap'
    },
    {
      icon: '/assets/icons/14.svg',
      name: 'New Pairs Bot',
      to: ''
    },
    {
      icon: '',
      name: 'Others',
      to: ''
    },
    {
      icon: '/assets/icons/15.svg',
      name: 'User Account',
      to: 'user'
    },
    {
      icon: '/assets/icons/16.svg',
      name: 'Configuration',
      to: 'configuration'
    },
    {
      icon: '',
      name: 'Theme',
      to: ''
    },
    {
      icon: '/assets/icons/17.svg',
      name: 'Theme Mode',
      to: ''
    },
    {
      icon: '/assets/icons/ether.svg',
      name: 'Ether',
      to: {
        pathname: '/app/ether/main'
      }
    },
    {
      icon: '/assets/icons/bsc.png',
      name: 'BSC',
      to: {
        pathname: `/app/bsc/${child}`
      }
    }
  ]

  return (
    <div className={props.isMobile ? props.expanded ? 'left-tabs mobile' : 'd-none' : 'left-tabs' }>
      <div className="brand-head pointer" onClick={goToLandingPage} >
        <img src="/assets/logo_gram.png" alt="logo" className="logo-only" />
        <img src="/assets/logo.png" alt="logo" className="logo-with-text" />
      </div>

      <div>
        {parent === 'bsc' && bscSidebar.map((i, index) => (
          <Link key={index} to={i.to} replace className="link-wrap">
            <div className={child === i.to ? 't-selected text-white' : 'tab-menu text-white'} >
              {i.icon !== '' && <img src={i.icon} alt="icons" />}
              <p className="text-menu">{i.name} </p>
            </div>
          </Link>
        ))}

        {parent === 'ether' && etherSidebar.map((i, index) => (
          <Link key={index} to={i.to} replace={true} className="link-wrap ">
            <div className={child === i.to ? 't-selected text-white' : 'tab-menu text-white'}>
              {i.icon !== '' && <img src={i.icon} alt="icons" />}
              <p className="text-menu">{i.name} </p>
            </div>
          </Link>
        ))}

        {parent === 'polygon' && polySidebar.map((i, index) => (
          <Link key={index} to={i.to} replace className="link-wrap">
            <div className={child === i.to ? 't-selected text-white' : 'tab-menu text-white'}>
              {i.icon !== '' && <img src={i.icon} alt="icons" />}
              <p className="text-menu">{i.name} </p>
            </div>
          </Link>
        ))}
      </div>

      {/* <div  >
        <Link to="main" className="link-wrap">
          <div className={menu === 'main' ? "t-selected text-white" : "tab-menu"}>
            <img src="/assets/icons/10.svg" alt="icons" />
            <p className="text-menu">ADATBOARD</p>
          </div>
        </Link>

        <div className="empty-space">
          <p className="empty-space-text">
            Uniswap
          </p>
        </div>

        <Link to="live-pair" className="link-wrap">
          <div className={menu === 'live-pair' ? "t-selected  text-white" : "tab-menu "}>
            <img src="/assets/icons/11.svg" alt="icons" />
            <p className="text-menu">Live New Pairs</p>
          </div>
        </Link>
        <Link to="pair-explorer" className="link-wrap">
          <div className={menu === 'pair-explorer' ? "t-selected  text-white" : "tab-menu "}>
            <img src="/assets/icons/12.svg" alt="icons" />
            <p className="text-menu">Pair Explorer</p>
          </div>
        </Link>
        <Link to="big-swap" className="link-wrap">
          <div className="tab-menu ">
            <img src="/assets/icons/03.svg" alt="icons" />
            <p className="text-menu">Big Swap Explorer</p>
          </div>
        </Link>

        <div className="empty-space">
          <p className="empty-space-text">
            Sushiswap
          </p>
        </div>

        <Link to="big-swap" className="link-wrap">
          <div className={menu === 'multiswap' ? "t-selected  text-white" : "tab-menu "}>
            <img src="/assets/icons/13.svg" alt="icons" />
            <p className="text-menu">Multiswap</p>
          </div>
        </Link>
        <Link to="multiswap" className="link-wrap">
          <div className="tab-menu ">
            <img src="/assets/icons/14.svg" alt="icons" />
            <p className="text-menu">New Pairs Bot</p>
          </div>
        </Link>
        <Link to="multiswap" className="link-wrap">
          <div className="tab-menu ">
            <img src="/assets/icons/03.svg" alt="icons" />
            <p className="text-menu">Big Swap Explorer</p>
          </div>
        </Link>

        <div className="empty-space">
          <p className="empty-space-text">
            Common
          </p>
        </div>

        <Link to="user" className="link-wrap">
          <div className={menu === 'user' ? "t-selected  text-white" : "tab-menu "}>
            <img src="/assets/icons/15.svg" alt="icons" />
            <p className="text-menu">User Account</p>
          </div>
        </Link>
        <Link to="configuration" className="link-wrap">
          <div className={menu === 'configuration' ? "t-selected  text-white" : "tab-menu "}>
            <img src="/assets/icons/16.svg" alt="icons" />
            <p className="text-menu">Configuration</p>
          </div>
        </Link>

        <div className="empty-space">
          <p className="empty-space-text">
            Others
          </p>
        </div>

        <Link to="live-pair" className="link-wrap">
          <div className="tab-menu ">
            <img src="/assets/icons/17.svg" alt="icons" />
            <p className="text-menu">Theme Mode</p>
          </div>
        </Link>

        <div className="empty-space">
          <p className="empty-space-text">
            Theme
          </p>
        </div>
        
        <Link to="live-pair" className="link-wrap">
          <div className="tab-menu ">
            <img src="/assets/icons/15.svg" alt="icons" />
            <p className="text-menu">Theme Mode</p>
          </div>
        </Link>
        <Link to="live-pair" className="link-wrap">
          <div className="tab-menu ">
            <img src="/assets/icons/16.svg" alt="icons" />
            <p className="text-menu">Theme Mode</p>
          </div>
        </Link>

        <div className="empty-space" />

        <div 
          className={props.tabTopSelected === 'ether' ? "d-none" : "pointer tab-menu  link-wrap"}
          onClick={() => props.setTabTopSelected('ether')}
        >
          <img src="/assets/icons/ether.svg" alt="ether" style={{ width: 21, height: 21 }} />
          <p  className="text-menu">Ether</p>
        </div>

        <div 
          className={props.tabTopSelected === 'bsc' ? "d-none" : "pointer tab-menu  link-wrap"}
          onClick={() => props.setTabTopSelected('bsc')}
        >
          <img src="/assets/icons/bsc.png" alt="bsc" />
          <p  className="text-menu">BSC</p>
        </div>

        <div 
          className={props.tabTopSelected === 'polygon' ? "d-none" : "pointer tab-menu  link-wrap"}
          onClick={() => props.setTabTopSelected('polygon')}
        >
          <img src="/assets/icons/polygon.png" alt="polygon" />
          <p  className="text-menu">Polygon</p>
        </div>

      </div> */}

    </div>
  )
}
