import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Om from './pages/Om/Om';
import Tjenester from './pages/Tjenester/Tjenester';
import Tjeneste from './pages/Tjenester/Tjeneste';
import './scss/style.scss';
import { HashRouter, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/om" component={Om} />
        <Route exact path="/tjenester" component={Tjenester} />
        <Route path="/tjenester/tjeneste/:id" component={Tjeneste} />
      </HashRouter>
    )
  }
}

export default App;
