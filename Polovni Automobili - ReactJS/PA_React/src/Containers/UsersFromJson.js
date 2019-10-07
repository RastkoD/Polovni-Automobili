import React, { Component } from 'react';
import axios from 'axios';
import KorisnikData from '../Data/Korisnik.json';
import Korisnik from '../Components/Korisnik';

class JsonUsers extends Component {
  state = {
    korisnik: [],
    korisnici: KorisnikData,
    numberOfRecords: 3
  };

  /*
  componentDidMount() {
    axios.get('http://localhost:80/polovniApi/korisnici.php').then(response => {
      const korisnik = response.data.slice(0, this.state.numberOfRecords);
      const updatedRecords = korisnik.map(korisnik => {
        return { ...korisnik };
      });
      this.setState({ korisnik: updatedRecords });
      console.log(korisnik[1].ime);
    });
  }
  */

  render() {
    let list1 = this.state.korisnici.map((korisnici, index) => (
      <li key={index}>
        {korisnici.ime} {korisnici.prezime} - Godiste: {korisnici.year} - Pol:{' '}
        {korisnici.pol} - Broj: {korisnici.broj_oglasa}
      </li>
    ));
    console.log(this.state.korisnik[0]);

    return (
      <div style={{ paddingLeft: '20px' }}>
        <h3>Users from Json file</h3>
        <ol> {list1} </ol>
        <br />
        <br />
        <div>
          <br />
          <br />
          <div>
            <Korisnik
              ime={this.state.korisnici[2].ime}
              broj={this.state.korisnici[2].broj_oglasa}
              godiste={this.state.korisnici[2].year}
              pol={this.state.korisnici[2].pol}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default JsonUsers;
