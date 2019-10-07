import React, {Component} from 'react';
import axios from 'axios';
import '../Styles/Podesavanja.css';

class Podesavanja extends Component {
	state={
        Ime: '',
        Prezime: '',
        Adresa: '',
        Grad: '',
        Postanski_broj: '',
        Region: '',
        Drzava: '',
        Telefon: '',
        Telefon_2: '',
        Mobilni_telefon: '',
        Mobilni_telefon_2: '',
        Fax: ''

    }
    postDataHandler=()=>{
        const data={
            Ime:this.state.Ime,
            Prezime:this.state.Prezime,
            Adresa:this.state.Adresa,
            Grad:this.state.Grad,
            Postanski_broj:this.state.Postanski_broj,
            Region:this.state.Region,
            Drzava:this.state.Drzava,
            Telefon:this.state.Telefon,
            Telefon_2:this.state.Telefon_2,
            Mobilni_telefon:this.state.Mobilni_telefon,
            Mobilni_telefon_2:this.state.Mobilni_telefon_2,
            Fax:this.state.Fax
        }
        axios.post('http://localhost/polovniApi/podesavanja.php',JSON.stringify(data))
        .then(response=>{
            console.log(response)
        })
    }
	render() {
		return (
			<div>
				<div className="col-lg-9 col-md-9 col-sm-12 content">
					<h5>Podešavanja profila</h5>
					<h6>Opšti podaci</h6>
					<hr/>
					<div className="row settings">
						<div className="col-lg-6 col-md-6 col-sm-12 profil-1">
							<form>
								<label className="required" id="ime">Ime <span> *</span></label>
								<input type="text" id="first_name" name="first_name" 
								 onChange={(event)=>this.setState({Ime:event.target.value})}/>
								<br/><br/>
								<label className="required" id="prezime">Prezime <span> *</span></label>
								<input type="text" id="last_name" name="last_name" 
								 onChange={(event)=>this.setState({Prezime:event.target.value})}/>
								<br/><br/>
								<label className="required" id="adresa">Adresa <span> *</span></label>
								<input type="text" id="adress" name="adress" 
								 onChange={(event)=>this.setState({Adresa:event.target.value})}/>
								<br/><br/>
								<label className="required" id="grad">Grad <span> *</span></label>
								<input type="text" id="city" name="city" 
								 onChange={(event)=>this.setState({Grad:event.target.value})}/>
								<br/><br/>
								<label className="required" id="postanski_broj">Poštanski broj <span> *</span></label>
								<input type="text" id="zip_code" name="zip_code" 
								 onChange={(event)=>this.setState({Postanski_broj:event.target.value})}/>
								<br/><br/>
								<label className="required" id="region">Region <span> *</span></label>
								<select name="user_region" form="region"   onChange={(event)=>this.setState({Region:event.target.value})}>
		  							<option value="region">Odaberite region</option>
									<option value="beograd_1">Beograd (uži)</option>
									<option value="beograd_2">Beograd (širi)</option>
									<option value="borski">Borski</option>
									<option value="branicevski">Braničevski</option>
									<option value="jablanicki">Jablanički</option>
									<option value="južno-backi">Južno-bački</option>
									<option value="južno-banatski">Južno-banatski</option>
									<option value="kolubarski">Kolubarski</option>
									<option value="kosovski">Kosovski</option>
									<option value="kosovsko-pomoravski">Kosovsko-pomoravski</option>
									<option value="kosovsko-mitrovacki">Kosovsko-mitrovački</option>
									<option value="macvanski">Mačvanski</option>
									<option value="moravicki">Moravički</option>
									<option value="nisavski">Nišavski</option>
									<option value="pcinjski">Pčinjski</option>
									<option value="pecki">Pećki</option>
									<option value="pirotski">Pirotski</option>
									<option value="podunavski">Podunavski</option>
									<option value="pomoravski">Pomoravski</option>
									<option value="prizrenski">Prizrenski</option>
									<option value="rasinski">Rasinski</option>
									<option value="raski">Raški</option>
									<option value="severno-backi">Severno-bački</option>
									<option value="severno-banatski">Severno-banatski</option>
									<option value="srednje-banatski">Srednje-banatski</option>
									<option value="sremski">Sremski</option>
									<option value="sumadijski">Šumadijski</option>
									<option value="toplicki">Toplički</option>
									<option value="zajecarski">Zaječarski</option>
									<option value="zapadno-backi">Zapadno-bački</option>
									<option value="zlatiborski">Zlatiborski</option>
									<option value="inostranstvo">Inostranstvo</option>
								</select>
								<br/><br/>
								<label className="required" id="drzava">Država <span> *</span></label>
								<select form="country" id="country" name="country"   onChange={(event)=>this.setState({Drzava:event.target.value})}>
									<option value="">Odaberite državu</option>
									<option value="RS" selected="selected">Srbija</option>
									<option value="ME">Crna Gora</option>
									<option value="BA">Bosna i Hercegovina</option>
									<option value="BE">Belgija</option>
									<option value="FR">Francuska</option>
									<option value="NL">Holandija</option>
									<option value="IT">Italija</option>
									<option value="DE">Nemačka</option>
									<option value="RU">Rusija</option>
									<option value="CH">Švajcarska</option>
									<option value="GB">Velika Britanija</option>
									<option value="AT">Austrija</option>
									<option value="BG">Bugarska</option>
									<option value="CZ">Češka</option>
									<option value="DK">Danska</option>
									<option value="HR">Hrvatska</option>
									<option value="IE">Irska</option>
									<option value="LT">Litvanija</option>
									<option value="LU">Luksemburg</option>
									<option value="HU">Mađarska</option>
									<option value="MK">Makedonija</option>
									<option value="PT">Portugal</option>
									<option value="RO">Rumunija</option>
									<option value="SK">Slovačka</option>
									<option value="SI">Slovenija</option>
									<option value="ES">Španija</option>
									<option value="SE">Švedska</option>
									<option value="XX">Ostale zemlje</option>
								</select>
								<br/><br/>
								<input type="checkbox" id="hide_adress" name="hide_adress" value="1"/> Sakrij adresu u oglasu<br/>
								<br/>
							</form>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-12 profil-2">
							<form>
								<label className="not-required" for="phone" id="telefon">Telefon </label>
								<input type="text" id="phone" name="phone"
								 onChange={(event)=>this.setState({Telefon:event.target.value})}/>
								<br/><br/>
								<label className="not-required" for="phone2" id="telefon2">Telefon 2 </label>
								<input type="text" id="phone2" name="phone2"/>
								<br/><br/>
								<label className="required" id="mobilni">Mobilni Telefon <span> *</span></label>
								<input type="text" id="mobile" name="mobile"  onChange={(event)=>this.setState({Mobilni_telefon:event.target.value})}/>
								<br/><br/>
								<label className="not-required" for="mobile2" id="mobilni2">Telefon 2 </label>
								<input type="text" id="mobile2" name="mobile2"/>
								<br/><br/>
								<label className="not-required" for="fax" id="faks">Fax </label>
								<input type="text" id="fax" name="fax"
								onChange={(event)=>this.setState({Fax:event.target.value})}/>
								<br/><br/>
								<input type="checkbox" id="hide_email" name="hide_email" value="1"/><span> Onemogući kontaktiranje na email</span>
								<br/><br/>
								<input type="checkbox" id="allow_offers" name="allow_offers" value="1" checked="checked"/><span> Dozvoli primanje ponuda za sačuvane oglase</span>
								<br/><br/>
								<input type="checkbox" id="hide_other_ads" name="hide_other_ads" value="1"/><span> Skloni link do ostalih oglasa</span>
								<br/><br/>
							</form>
						</div>
					</div>
					<br/>
					<h6>Izmeni pristupne parametre</h6>
					<hr/>
					<div className="row settings">
						<div className="col-lg-6 col-md-6 col-sm-12 profil-1">
							<form>
								<label className="change_pass" for="newPassword_first" id="nova_sifra">Nova šifra </label>
								<input type="password" id="newPassword_first" name="newPassword[first]" autocomplete="off"/>
								<br/><br/>
								<label className="change_pass" for="newPassword_second" id="ponovi_sifru">Ponovi novu šifru </label>
								<input type="password" id="newPassword_second" name="newPassword[second]" autocomplete="off"/>
								<br/><br/>
								<label className="change_pass" for="oldPassword" id="stara_sifra">Trenutna šifra </label>
								<input type="password" id="oldPassword" name="oldPassword"/>
								<br/><br/>
							</form>
						</div>
					</div>
					<br/>
					<h6>Povezivanje sa Facebook-om</h6>
					<hr/>
					<div className="row facebook settings">
						<div className="col-lg-12 col-md-12 col-sm-12 profil-3">
							<div>
								<button type="button" className="btn btn-primary btn-md" id="soc-3"><i className="fab fa-facebook-f"></i> Poveži FB profil</button>
							</div>
							<p>Izgradi poverenje kod kupaca i daj lični pečat tvom oglasu!</p>
							<p>Poveži svoj nalog sa FB nalogom i prikaži FB profil sliku u oglasima!</p>
							<br/>
						</div>
					</div>
					<br/>
					<div className="row submit settings">
						<div className="col-lg-12 col-md-12 col-sm-12 profil-4">
							<div>
								<button type="submit" onClick={this.postDataHandler} className="btn btn-success btn-lg"> Sačuvaj</button>
							</div>
						</div>
					</div>
					<br/>
					<h6>Korisni linkovi</h6>
					<hr/>
					<div className="row">
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-6 profil-5">
							<a className="useful_link" href="#self" title="SMS obnova"><img src="SMS-obnova.png" alt="SMS obnova"/></a>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-6 profil-5">
							<a className="useful_link" href="#self" title="Kupoprodajni ugovor"><img src="Kupprodajni_ugovor.png" alt="Kupoprodajni ugovor"/></a>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 profil-5">
							<a className="useful_link" href="#self" title="Prodajna tabla"><img src="Prodajna_tabla.png" alt="Prodajna tabla"/></a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Podesavanja;