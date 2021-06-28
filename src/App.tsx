import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home.page';
import About from './pages/About.page'
import StyledNavbar from './components/StyledNavbar.component';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <StyledNavbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </Switch>
    </div>
  );
}

export default App;
