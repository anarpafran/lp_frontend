import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home'
import NotFound from './components/NotFound'
import Resume from './components/Resume'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
