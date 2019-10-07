import React, {Component} from 'react';
import '../Styles/Sidebar.css';

class Sidebar extends Component {
	render() {
		return (
			<div id="main">
				<div className="col-lg-3 col-md-12 col-sm-12 side-nav">
					<div className="profile">
		                <div className="profile-pic">
		                    <img src="user-pic.png" alt="user-pic"/>
			                    <div className="overlay">
		                        	<div className="text">Ubacite svoju fotografiju</div>
		                    	</div>
						</div>
		                <div className="social">
		                        <button type="button" className="btn btn-primary btn-md" id="soc-1"><i className="fab fa-facebook-square"></i> Poveži FB profil</button>
								<button type="button" className="btn btn-success btn-md" id="soc-2">Iskorišćenost oglasa: 0%</button>
						</div>
					</div>

	                <div className="questions">
	                    <p>Česta pitanja</p>
	                    <div><a className="exmp" href="#self">Kako da postavim oglas?</a></div>
	                    <div><a className="exmp" href="#self">Kako da poručim dilerski paket?</a></div>
	                    <div><a className="exmp" href="#self">Kako da istaknem oglas?</a></div>
	                    <div><a className="exmp" href="#self">Koliko oglasa mogu da postavim?</a></div>
	                    <div><a className="exmp" href="#self">Ostala pitanja</a></div>
	                </div>
				</div>
			</div>
		);
	}
}

export default Sidebar;