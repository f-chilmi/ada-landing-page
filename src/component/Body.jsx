import React from 'react'
import { Route, useLocation } from 'react-router-dom'
import DashboardBsc from '../pages/bsc/DashboardBsc'
import LivePairs from '../pages/bsc/LivePairsBsc'
import Multiswap from '../pages/Multiswap'
import UserAccount from '../pages/UserAccount'
import PairExplorer from '../pages/bsc/PairExplorerBsc'
import Configuration from '../pages/Configuration'
import DashboardEther from '../pages/ether/DashboardEther'
import DashboardPolygon from '../pages/polygon/DashboardPolygon'


export default function Body(props) {

  const { pathname } = useLocation()
  const menu = pathname.slice(11)
  console.log("props", props)

  const url = [
    {
      name: "main",
      main: () => {
        if (props.tabTopSelected === 'bsc') return <DashboardBsc />
        if (props.tabTopSelected === 'ether') return <DashboardEther />
        if (props.tabTopSelected === 'polygon') return <DashboardPolygon />
      }
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

  return (
    <div >
      <Route path={'/dashboard/:menu'} >
        {url.map(i => {
          if (i.name === menu) {
            return <i.main key={i.name} />
          }
          return null
        })}
      </Route>
    </div>
  )
}
