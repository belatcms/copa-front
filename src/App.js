import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './assets/styles/global.css'

// Pages
import Home from './pages/Home'
import Result from './pages/Result'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/result' component={Result} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
