import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import Footer from './components/Footer';
import Game from './containers/Game';
import Header from './components/Header';
import Links from './components/Links';
import { Provider } from "react-redux";
import Scores from './containers/Scores';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Links />
        <Switch>
          <Route exact path="/game" render={(props) => <Game {...props} />} />
          <Route exact path="/scores" render={(props) => <Scores {...props} />} />
          <Redirect from="/" to="/game" />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
