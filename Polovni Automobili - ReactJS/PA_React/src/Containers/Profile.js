import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AktivniOglasi from '../Components/Aktivni-Oglasi';
import NeaktivniOglasi from '../Components/Neaktivni-Oglasi';
import MojaVozila from '../Components/Moja-Vozila';
import PotencijalniKupci from '../Components/Potencijalni-Kupci';
import Krediti from '../Components/Krediti';
import Oglasi from '../Components/Oglasi';
import Poruke from '../Components/Poruke';
import Obavestenja from '../Components/Obavestenja';
import Podesavanja from '../Components/Podesavanja';
import '../Styles/App.css';

class Profile extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="sticky-top navbar navbar-expand-lg navbar-dark nav-bg-color">
            <ul className="navbar-nav mr-auto justify-content-between w-100">
              <li>
                <Link to={'/aktivni-oglasi'} className="nav-link">
                  Aktivni Oglasi
                </Link>
              </li>
              <li>
                <Link to={'/neaktivni-oglasi'} className="nav-link">
                  Neaktivni Oglasi
                </Link>
              </li>
              <li>
                <Link to={'/moja-vozila'} className="nav-link">
                  Moja Vozila
                </Link>
              </li>
              <li>
                <Link to={'/potencijalni-kupci'} className="nav-link">
                  Potencijalni Kupci
                </Link>
              </li>
              <li>
                <Link to={'/krediti'} className="nav-link vert-center">
                  Krediti
                </Link>
              </li>
              <li>
                <Link to={'/oglasi'} className="nav-link vert-center">
                  Oglasi
                </Link>
              </li>
              <li>
                <Link to={'/poruke'} className="nav-link vert-center">
                  Poruke
                </Link>
              </li>
              <li>
                <Link to={'/obavestenja'} className="nav-link vert-center">
                  Obavestenja
                </Link>
              </li>
              <li>
                <Link to={'/podesavanja'} className="nav-link vert-center">
                  Podesavanja
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="transparent for-mobile navbar navbar-expand-lg navbar-dark nav-bg-color">
            <ul className="navbar-nav mr-auto justify-content-between w-100">
              <li>
                <Link to={'/aktivni-oglasi'} className="nav-link">
                  Aktivni Oglasi
                </Link>
              </li>
              <li>
                <Link to={'/neaktivni-oglasi'} className="nav-link">
                  Neaktivni Oglasi
                </Link>
              </li>
              <li>
                <Link to={'/moja-vozila'} className="nav-link">
                  Moja Vozila
                </Link>
              </li>
              <li>
                <Link to={'/potencijalni-kupci'} className="nav-link">
                  Potencijalni Kupci
                </Link>
              </li>
              <li>
                <Link to={'/krediti'} className="nav-link vert-center">
                  Krediti
                </Link>
              </li>
              <li>
                <Link to={'/oglasi'} className="nav-link vert-center">
                  Oglasi
                </Link>
              </li>
              <li>
                <Link to={'/poruke'} className="nav-link vert-center">
                  Poruke
                </Link>
              </li>
              <li>
                <Link to={'/obavestenja'} className="nav-link vert-center">
                  Obavestenja
                </Link>
              </li>
              <li>
                <Link to={'/podesavanja'} className="nav-link vert-center">
                  Podesavanja
                </Link>
              </li>
            </ul>
          </nav>
          <br />

          <Switch>
            <Route exact path="/Aktivni-Oglasi" component={AktivniOglasi} />
            <Route exact path="/Neaktivni-Oglasi" component={NeaktivniOglasi} />
            <Route exact path="/Moja-Vozila" component={MojaVozila} />
            <Route
              exact
              path="/Potencijalni-Kupci"
              component={PotencijalniKupci}
            />
            <Route exact path="/Krediti" component={Krediti} />
            <Route exact path="/Oglasi" component={Oglasi} />
            <Route exact path="/Poruke" component={Poruke} />
            <Route exact path="/Obavestenja" component={Obavestenja} />
            <Route exact path="/Podesavanja" component={Podesavanja} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Profile;
