import React from 'react'
import { Route, useLocation } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import LivePairs from '../pages/LivePairs'
import Multiswap from '../pages/Multiswap'
import UserAccount from '../pages/UserAccount'
import PairExplorer from '../pages/PairExplorer'
import Configuration from '../pages/Configuration'


export default function Body() {

  const { pathname } = useLocation()
  const menu = pathname.slice(11)

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

  return (
    <div>
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
