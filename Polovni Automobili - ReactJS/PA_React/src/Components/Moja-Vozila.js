import React, {Component} from 'react';
import '../Styles/Moja-Vozila.css';

class MojaVozila extends Component {
	render() {
		return (
			<div>
				<div className="col-lg-9 col-md-9 col-sm-9 content">
					<h5>Moja vozila</h5>
					<br/>
					<div className="MV-1">
						<div className="nocar">
							<img src="no-car-icon.svg" alt="no-car"/>
						</div>
						<div className="nocar-text">
							<p className="car-button">Trenutno nemaš kupljenih vozila<br/>
								<button className="btn btn-success btn-sm" href="#">Dodaj novo vozilo</button>
							</p>
						</div>
					</div>
					<hr/>
					<p className="MV-text">Na ovoj stranici će se nalaziti tvoja kupljena vozila.</p>
					<p className="MV-text">Vozila dodaješ tako što u tabu <a href="#self">"Oglasi koje pratim"</a>, odabereš da si kupio vozilo koje je prodavac prethodno označio kao prodato.</p>
					<div className="example-img">
						<img src="example-my-garage.png" alt="" />
					</div>
					<br/>
					<p className="MV-text">Želimo da ti obezbedimo evidenciju o tvojim kupljenim automobilima, ali i da ti pomognemo sa korišćenjem sajta nakon kupovine vozila. Vozilo će se naći u listi kupljenih vozila tek nakon potvrde od prodavca da je automobil prodao baš tebi.</p>
				</div>
			</div>
		);
	}
}

export default MojaVozila;