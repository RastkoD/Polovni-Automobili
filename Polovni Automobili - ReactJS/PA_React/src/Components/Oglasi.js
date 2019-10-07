import React, {Component} from 'react';
import '../Styles/Oglasi.css';

class Oglasi extends Component {
	render() {
		return (
			<div>
				<div className="col-lg-9 col-md-9 col-sm-9 content">
					<h5>Oglasi koje pratim</h5>
					<br/>
					<div className="row FA">
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 FA-1">
							<p>Ukoliko tražiš automobil, možemo ti pomoći. Oglasi kupovinu, a mi ćemo te obavestiti kada se takvo vozilo pojavi na sajtu.</p>
							<button type="button" className="btn btn-primary btn-md">OGLASI KUPOVINU</button>
						</div>
					</div>
					<br/>
					<div className="add-buttons">
						<button type="button" className="btn btn-secondary btn-sm" style={{marginRight: "5px"}}>Označi sve / Poništi</button>
						<button type="button" className="btn btn-secondary btn-sm"><i className="fas fa-trash-alt"></i> Obriši (0)</button>
					</div>
					<br/><br/><br/>
					<div className="empty">
						<h6>Trenutno nemaš oglase koje pratiš</h6>
					</div>
				</div>
			</div>
		);
	}
}

export default Oglasi;