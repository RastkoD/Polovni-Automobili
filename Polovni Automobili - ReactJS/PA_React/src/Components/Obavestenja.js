import React, {Component} from 'react';
import '../Styles/Obavestenja.css';

class Obavestenja extends Component {
	render() {
		return (
			<div>
				<div class="col-lg-9 col-md-9 col-sm-9 content">
					<h5>Obaveštenja</h5>
					<br/>
					<p>Nemate nijedno obaveštenje</p>
					<div class="row notice">
						<div class="col-lg-12 col-md-12 col-sm-12 profil-3">
						</div>
					</div>
					<br/>
				</div>
			</div>
		);
	}
}

export default Obavestenja;