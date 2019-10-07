import React, { Component } from 'react';
import PotKupData from '../Data/potencijalni_kupci.json';
import '../Styles/Potencijalni-Kupci.css';

class PotencijalniKupci extends Component {
  state = {
    pk: PotKupData
  };

  render() {
    /* Map through JSON file */

    let potkup = this.state.pk.map((pk, index) => (
      <tr className='pk-data-r' key={index}>
        <td className='pk-data'>{pk.tip}</td>
        <td className='pk-data'>{pk.kupac}</td>
        <td className='pk-data'>{pk.oglas}</td>
        <td className='pk-data'>{pk.vreme}</td>
        <td className='pk-data'>{pk.ponuda} €</td>
        <td className='pk-data'>{pk.akcije}</td>
      </tr>
    ));
    return (
      <div>
        <div className='col-lg-9 col-md-9 col-sm-9 content'>
          <section className='potencijalni-kupci'>
            <div className='container center'>
              <h4>Potencijalni kupci</h4>
              <br />
              <div className='row PK'>
                <div className='col-lg-12 col-md-12 col-sm-12 box-1'>
                  <p>
                    <span>
                      <i className='far fa-handshake fa-2x' />
                    </span>{' '}
                    Zainteresovani kupci su potencijalni kupci koji su
                    zainteresovani za vozilo / oglas koje nudite i očekuju Vašu
                    ponudu.
                    <br />
                    <span>
                      <i className='far fa-thumbs-up fa-2x' />
                    </span>{' '}
                    Pratioci oglasa prate vaš oglas, jer im se oglas sviđa,
                    prate promenu cene ili će Vas sami kontaktirati.
                  </p>
                  <div className='explain'>
                    <a href='#self'>
                      <span>
                        <i className='fas fa-info-circle' />
                      </span>
                      Pogledaj objašnjenje ove usluge
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <br />

            <div className='msg-buttons'>
              <div className='check'>
                <input type='checkbox' /> Prikaži i pratioce oglasa
              </div>
              <br className='break' />
              <br className='break' />
              <button
                type='button'
                className='btn btn-outline-secondary btn-md'
              >
                Neposlate ponude (0)
              </button>
              <br className='break' />
              <br className='break' />
              <button
                type='button'
                className='btn btn-outline-secondary btn-md'
              >
                Poslate ponude (0)
              </button>
            </div>
            <br />
            <br className='break' />
            <table className='table table-hover table-sm table-primary table-bordered'>
              <thead>
                <tr>
                  <th>Tip</th>
                  <th>Potencijalni kupac</th>
                  <th>Oglas</th>
                  <th>Vreme praćenja</th>
                  <th>Ponuda poslata</th>
                  <th>Akcije</th>
                </tr>
              </thead>
              <tbody className='pk-data-m'>{potkup}</tbody>
            </table>
            <p className='text-center'>
              <button className='btn btn-outline-primary'>Učitaj još</button>
            </p>
          </section>
        </div>
      </div>
    );
  }
}

export default PotencijalniKupci;
