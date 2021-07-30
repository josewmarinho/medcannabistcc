import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import Inicio from './components/pages/Inicio';
import Sobre from './components/pages/Sobre';
import Cannabis from './components/pages/Cannabis';
import Padre from './components/pages/Padre';
import Curso from './components/pages/Curso';
import Aula from './components/pages/Aula';
import Contato from './components/pages/Contato';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Inicio} />
        <Route path='/sobre' component={Sobre} />
        <Route path='/cannabis' component={Cannabis} />
        <Route path='/padreticao' component={Padre} />
        <Route path='/curso' component={Curso} />
        <Route path='/aulas' component={Aula} />
        <Route path='/contato' component={Contato} />
      </Switch>
    </Router>
  );
}

export default App;
