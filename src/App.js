import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { IceCreamList } from './IceCreamList.js';
import { CreateIceCream } from './CreateIceCream.js';
import { Details } from './details.js';
import './App.css';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/ice-cream/">Ice Cream</Link>
      <Link to ="/create-ice-cream">Create Ice Cream</Link>
      <Switch>
          <Route exact path="/ice-cream/" component={IceCreamList} />
          <Route exact path="/create-ice-cream/" component={CreateIceCream} />
          <Route exact path="/ice-cream/:flavor" component={Details} />  
          {/* <Route component={NotFound}/> */}
      </Switch>
    </div>
    </Router>
  );
}

export default App;