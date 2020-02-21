import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { IceCreamList } from './IceCreamList.js';
import './App.css';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/ice-cream/">Ice Cream</Link>
      <Switch>
          <Route exact path="/ice-cream/" component={IceCreamList} />
          {/* <Route exact path="/:name?" component={Home} />   */}
          {/* <Route component={NotFound}/> */}
      </Switch>
    </div>
    </Router>
  );
}

export default App;