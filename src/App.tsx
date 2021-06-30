import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home.page';
import About from './pages/About.page'
import Contact from './pages/Contact.page'
import Checkout from './pages/Checkout.page';

import StyledNavbar from './components/StyledNavbar.component';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <StyledNavbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/checkout" exact component={Checkout} />
      </Switch>
    </div>
  );
}

export default App;
