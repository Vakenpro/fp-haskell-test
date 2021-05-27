import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Useracc from 'img/user.svg';

import Home from './mainPage';
import Test from './components/test/tests';
import Tests from './pages/testPage/testPage';
import Crossword from './components/crossword/crossword';
import Crosswords from './pages/crosswordPage/crosswordPage';
import Trainer from './components/trainer/trainer';
import Trainers from './pages/trainers/trainers';

import { Wrapper, Layerbgcontent1, Layerbgcontent2, Head, Ul, User, Nav, Logo, IconsLink} from './styled';

export default function App() {
  return (
    <Router>
      <Wrapper>
            <Head>
              <Logo>
                  <span>H</span>
                  <span>A</span>
                  <span>S</span>
                  <span>K</span>
                  <span>E</span>
                  <span>L</span>
                  <span>L</span>
              </Logo>
              <Nav>
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
              <User>
                  <IconsLink href="#">
                      <img src={Useracc} alt="img" />
                  </IconsLink>
                  <span>Вход</span>
              </User>
            </Head>
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
                <Layerbgcontent1></Layerbgcontent1>
                <Layerbgcontent2></Layerbgcontent2>
                <Home />
              </Route>
            </Switch>
      </Wrapper>
    </Router>
  );
}
