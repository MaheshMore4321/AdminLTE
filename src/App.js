import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Dashboard from './view/Dashboard';
import Undefined from './view/Undefined';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/undefined' component={Undefined} />
            <Route exact path='/dashboard' component={Dashboard} />
          </Switch>
        </>
      </Router>
    );
  }
}
export default App;