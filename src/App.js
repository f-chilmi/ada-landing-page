import './App.css';
import './App.scss';
import './pages/style.scss';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Main from './Main';
import Layout from './pages/Layout';
import LivePairs from './pages/LivePairs';
import PairExplorer from './pages/PairExplorer';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path='/dashboard' component={Layout} />
        {/* <Route path="/live-pairs">
          <LivePairs />
        </Route>
        <Route path="/pair-explorer">
          <PairExplorer />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
