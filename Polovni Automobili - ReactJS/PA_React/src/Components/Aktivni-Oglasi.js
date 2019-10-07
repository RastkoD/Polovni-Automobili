import React, { Component } from 'react';
import AktivniOglasiData from '../Data/aktivni_oglasi.json';
import '../Styles/Aktivni-Oglasi.css';

class AktivniOglasi extends Component {
  state = {
    ao: AktivniOglasiData
  };

  render() {
    let aktivniOglasi = this.state.ao.map((ao, index) => (
      <div>
        <div className="row active-ads" key={index}>
          <div className="col-lg-12 col-md-12 col-sm-12 AA-1">
            <h3>
              <a href="#self">
                <span>{ao.godiste}</span> {ao.marka} {ao.model}{' '}
              </a>
            </h3>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 AA-2">
            <a href="#self">
              <img src={ao.image} alt="Mercedes Benz A 140" />
              <figcaption className="overlay-1">{ao.cena} €</figcaption>
              <figcaption className="overlay-2">Pogledaj oglas</figcaption>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 AA-3">
            Broj pregleda oglasa: {ao.pregled}
            <br />
            <br />
            Postavljen: {ao.postavljen}
            <br />
            Ističe: {ao.istice}
            <br />
            ID: {ao.sifra}
            <br />
            <a href="#self">Statistika oglasa</a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 AA-4">
            <a href="#self" className="user-tool">
              Istakni oglas u pretrazi
            </a>
            <a
              href="#self"
              className="deleteAd"
              data-id="14425145"
              data-status="pending"
              data-paidimported=""
            >
              Kupi XL oglas
            </a>
            <a
              href="#self"
              className="soldAd"
              data-action="click"
              data-category="Korisnički profil"
              data-label="Prodao sam vozilo"
              data-id="14425145"
              data-status="pending"
            >
              Postavi oglas na FB
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 AA-5">
            <a href="#self" className="user-tool">
              Izmeni oglas
            </a>
            <a
              href="#self"
              className="deleteAd"
              data-id="14425145"
              data-status="pending"
              data-paidimported=""
            >
              Deaktiviraj oglas
            </a>
            <a
              href="#self"
              className="deleteAd"
              data-id="14425145"
              data-status="pending"
              data-paidimported=""
            >
              Obriši oglas
            </a>
            <a
              href="#self"
              className="soldAd"
              data-action="click"
              data-category="Korisnički profil"
              data-label="Prodao sam vozilo"
              data-id="14425145"
              data-status="pending"
            >
              Prodato vozilo
            </a>
          </div>
        </div>
        <br />
      </div>
    ));
    return (
      <div>
        <div className="col-lg-9 col-md-9 col-sm-9 content">
          <h5>Aktivni oglasi</h5>
          <button className="btn btn-success btn-md sale">
            Ubrzaj prodaju vozila <i className="far fa-clock" />
          </button>
          <br />
          <br />
          <h6>
            <i className="fas fa-car-side" /> Putnička vozila
          </h6>
          <hr />
          {aktivniOglasi}
        </div>
      </div>
    );
  }
}

export default AktivniOglasi;
