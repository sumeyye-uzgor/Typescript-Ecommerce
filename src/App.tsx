import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home.page';
import About from './pages/About.page'
import Contact from './pages/Contact.page'
import Checkout from './pages/Checkout.page'
import Details from './pages/Details.page'
import Container from 'react-bootstrap/Container';
import StyledNavbar from './components/StyledNavbar.component';
import ToastNotify from './components/ToastNotify.component';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container >
      <StyledNavbar />
      <ToastNotify />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/details" exact component={Details} />
      </Switch>
    </Container>
  );
}

export default App;
