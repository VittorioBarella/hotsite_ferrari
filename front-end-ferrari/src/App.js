import React from 'react';
import './App.css';
import NavBar from './components/Header/NavBar';
import Home from './components/Home/Home';
import Pilotos from './components/Pilotos/Pilotos';
import Sobre from './components/Sobre/Sobre';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/pilotos' component={Pilotos} />
          <Route path='/sobre' component={Sobre} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
