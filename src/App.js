import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './home'
import Portfolio from './portfolio'


class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </main>
    );
  }
}

export default App;
