import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './mainPage';
import Test from './components/test/tests';
import Tests from './pages/testPage/testPage';
import Crossword from './components/crossword/crossword';
import Crosswords from './pages/crosswordPage/crosswordPage';
import Trainer from './components/trainer/trainer';
import Trainers from './pages/trainers/trainers';

import { Ul, Nav, Logo } from './styled';

export default function App() {
  return (
    <Router>
      <Nav>
        <Logo>
          <a href="">Haskell</a>
        </Logo>
        <Ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/tests">Тесты</Link>
          </li>
          <li>
            <Link to="/crosswords">Кроссворды</Link>
          </li>
          <li>
            <Link to="/trainers">Тренажеры</Link>
          </li>
        </Ul>
      </Nav>
      <Switch>
        <Route path="/tests">
          <Tests />
        </Route>
        <Route path="/test/:id">
          <Test />
        </Route>
        <Route path="/crosswords">
          <Crosswords />
        </Route>
        <Route path="/crossword/:id">
          <Crossword />
        </Route>
        <Route path="/trainers">
          <Trainers />
        </Route>
        <Route path="/trainer/:id">
          <Trainer />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
