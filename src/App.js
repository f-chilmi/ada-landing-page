import './App.css';
import './App.scss';
import './pages/style.scss';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Main from './Main';
import Layout from './component/Layout';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path='/dashboard' component={Layout} />
      </Switch>
    </Router>
  );
}

export default App;
