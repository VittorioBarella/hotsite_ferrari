import React from 'react';
import './App.css';
import NavBar from './components/Header/NavBar';
import Home from './components/Home/Home';
import Equipe from './components/Equipe/Equipe';
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
          <Route path='/equipe' component={Equipe} />
          <Route path='/sobre' component={Sobre} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
