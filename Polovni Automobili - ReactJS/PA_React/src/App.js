import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Home from './Containers/Home';
import './Styles/App.css';
import Profile from './Containers/Profile';
import JsonUsers from './Containers/UsersFromJson';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h2>Polovni Automobili in React</h2>
          <nav className="navbar navbar-expand-lg navbar-dark nav-bg-color">
            <ul className="navbar-nav mr-auto justify-content-between mw-100">
              <li>
                <Link to={'/'} className="nav-link border-r">
                  Home
                </Link>
              </li>
              <li>
                <Link to={'/profil'} className="nav-link border-r">
                  Profil
                </Link>
              </li>
              <li>
                <Link to={'/jsonusers'} className="nav-link border-r">
                  Users
                </Link>
              </li>
            </ul>
            <form class="form-inline padding0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Pretraga"
                aria-label="Search"
              />
              <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">
                Kreni
              </button>
            </form>
          </nav>
          <div id="sc">
            <Sidebar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Profil" component={Profile} />
              <Route exact path="/Jsonusers" component={JsonUsers} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
