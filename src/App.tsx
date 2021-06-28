import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home.page';
import About from './pages/About.page'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </Switch>
    </div>
  );
}

export default App;
