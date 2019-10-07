import React, {Component} from 'react';
import NeaktivniOglasiData from '../Data/neaktivni_oglasi.json';
import '../Styles/Neaktivni-Oglasi.css';

class NeaktivniOglasi extends Component {
    state = {
		no: NeaktivniOglasiData,
	}

	render() {
        let neaktivniOglasi=this.state.no.map(
			(no,index)=>(
			<div>
				<div className="row inactive-ads-2" key={index}>
					<div className="col-lg-12 col-md-12 col-sm-12 NA-1">
						<h3><a href="#self"><span>{no.godiste}</span> {no.marka} {no.model} </a></h3>
					</div>
					<div className="col-lg-3 col-md-3 col-sm-6 NA-2">
							<a href="#self">
								<img src={no.image} alt={no.marka} />
								<figcaption className="overlay-1">{no.cena} €</figcaption>
								<figcaption className="overlay-2">Pogledaj oglas</figcaption>
							</a>
					</div>
					<div className="col-lg-3 col-md-3 col-sm-6 NA-3">
						Broj pregleda oglasa: {no.pregled}
						<br/>
						<br/>
						Postavljen: {no.postavljen}
						<br/>
						Ističe: {no.istice}
						<br/>
						ID: {no.sifra}
						<br/>
						<a href="#self">Statistika oglasa</a>
					</div>
					<div className="col-lg-3 col-md-3 col-sm-6 NA-4">
						<br/><span className="status">Čeka odobrenje</span><br/>
					</div>
					<div className="col-lg-3 col-md-3 col-sm-6 NA-5">
						<a href="#self" className="user-tool">Izmeni oglas</a>
						<a href="#self" className="deleteAd" data-id="14425145" data-status="pending" data-paidimported="">Obriši oglas</a>
						<a href="#self" className="soldAd" data-action="click" data-category="Korisnički profil" data-label="Prodao sam vozilo" data-id="14425145" data-status="pending">Prodato vozilo</a>
					</div>
				</div>
				<br/>
			</div>
	  		)
		)
		
		return (
			<div>
				<div className="col-lg-9 col-md-9 col-sm-9 content">
					<h5>Neaktivni oglasi</h5><br/>
					<h6><i className="fas fa-car-side"></i> Putnička vozila</h6>
					<hr/>
					<div className="row inactive-ads-1">
						<div className="col-lg-6 col-md-6 col-sm-12 NA">
							<div className="heading-1">
								<p>Opšte informacije</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 NA">
							<div className="heading-3">
								<p>Status oglasa</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 NA">
							<div className="heading-4">
								<p>Izmeni oglas</p>
							</div>
						</div>
					</div>
					{neaktivniOglasi}
				</div>
			</div>
		);
	}
}

export default NeaktivniOglasi;