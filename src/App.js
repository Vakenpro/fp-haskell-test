import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './mainPage';
import Tests from './tests';
import Crossword from './crossword';
import Trens from './treners';

import { Ul } from './styled';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <Ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/tests">Тесты</Link>
            </li>
            <li>
              <Link to="/cross">Кроссворды</Link>
            </li>
            <li>
              <Link to="/tren">Тренажеры</Link>
            </li>
          </Ul>
        </nav>
        <Switch>
          <Route path="/tests">
            <Tests />
          </Route>
          <Route path="/cross">
            <Crossword />
          </Route>
          <Route path="/tren">
            <Trens />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
