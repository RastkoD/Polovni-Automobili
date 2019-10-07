import React, {Component} from 'react';
import '../Styles/Krediti.css';

class Krediti extends Component {
	render() {
		return (
			<div>
				<div className="col-lg-9 col-md-9 col-sm-9 content">
					<div>
						<h2 className='headline'>Istakni oglase</h2>
				        <h3 className='headline1'>
				          Korišćenjem kredita kao načina plaćanja postižeš maksimalan učinak
				          oglašavanja:
				        </h3>
				        <div className='boxsz'>
				            <div className="column">
                                <div className='card'>Povećavate vidljivost Vašeg oglasa na sajtu - odlučivanju kupaca pri kupovini: (povećavate mogućnost da kupci brže dođu do Vašeg oglasa)</div>
                                <div className='italic1'>*Isticanjem oglasa povećavaš uočljivost tvog oglasa i dobijaš znatno veći broj pregleda</div>
                            </div>
				            <div className="column">
                                <div className='card'>Štedi vreme – jednostavnim klikom aktiviraj uslugu, bez potrebe odlaska u banku za uplatu svake pojedinačne usluge</div>
                            </div>
				            <div className="column">
                                <div className='card'>Štedi novac, tj. smanjuješ troškove oglašavanja – možeš ostvariti popust na količinu kupljenih kredita</div>
                            </div>
				            <div className="column">
                                <div className='card' style={{marginBottom: "30px"}}>Bez roka do kada možeš iskoristiti kupljene kredite</div>
                            </div>
				            <div className="column">
                                <div className='card' style={{marginBottom: "30px"}}>U svakom momentu u okviru tvog profila imaš uvid u stanje kredita</div>
                            </div>
                            <h3 className='headline1'> Na prikazane cene ostvaruješ i do 20% popusta na količinu kupljenih kredita: </h3>

                            <div className='mainborder col-md-12'>
                                <table className="bshad table table-striped table-bordered table-light table-hover">
				                    <thead>
				                        <tr>
                                            <th scope="col"> Paket kredita <br /> (broj kredita) </th>
				                            <th className='hide' scope="col"> Ekstra krediti <br /> za prvu kupovinu </th>
				                            <th className='hide' scope="col"> Standardna cena sa <br /> PDV-om / RSD </th>
				                            <th className='hide' scope="col">Popust</th>
				                            <th className='hide' scope="col"> Cena <br /> sa popustom / RSD </th>
				                            <th scope="col">Direktno porucivanje</th>
				                        </tr>
				                    </thead>
                                    <tbody>
				                        <tr>
				                            <td><span className='blue'>5</span><br /><span className='showmobile'>1.500,00<br /></span></td>
				                            <td className='hide'>+1</td>
				                            <td className='hide'>1.500,00</td>
				                            <td className='hide'>-</td>
				                            <td className='hide'>1.500,00</td>
				                            <td> <button type="button" className="btn btn-outline-primary"> Poruči paket </button> </td>
				                        </tr>
				                        <tr>
				                            <td><span className='blue'>10</span><br /><span className='showmobile'>2.850,00<br />sa popustom od 5%</span></td>
				                            <td className='hide'>+2</td>
				                            <td className='hide'>3.000,00</td>
				                            <td className='hide'>5%</td>
				                            <td className='hide'>2.850,00</td>
				                            <td> <button type="button" className="btn btn-outline-primary"> Poruči paket </button> </td>
				                        </tr>
				                        <tr>
				                            <td><span className='blue'>20</span><br /><span className='showmobile'>5.640,00<br />sa popustom od 6%</span></td>
            				                <td className='hide'>+4</td>
			            	                <td className='hide'>6.000,00</td>
				                            <td className='hide'>6%</td>
				                            <td className='hide'>5.640,00</td>
				                            <td> <button type="button" className="btn btn-outline-primary"> Poruči paket </button> </td>
				                        </tr>
				                        <tr>
				                            <td><span className='blue'>30</span><br /><span className='showmobile'>8.280,00<br />sa popustom od 8%</span></td>
				                            <td className='hide'>+6</td>
				                            <td className='hide'>9.000,00</td>
				                            <td className='hide'>8%</td>
				                            <td className='hide'>8.280,00</td>
				                            <td> <button type="button" className="btn btn-outline-primary"> Poruči paket </button> </td>
				                        </tr>
				                        <tr>
				                            <td><span className='blue'>50</span><br /><span className='showmobile'>13.500,00<br />sa popustom od 10%</span></td>
				                            <td className='hide'>+10</td>
				                            <td className='hide'>15.000,00</td>
				                            <td className='hide'>10%</td>
				                            <td className='hide'>13.500,00</td>
				                            <td> <button type="button" className="btn btn-outline-primary"> Poruči paket </button> </td>
				                        </tr>
				                        <tr>
				                            <td><span className='blue'>100</span><br /><span className='showmobile'>24.000,00<br />sa popustom od 20%</span></td>
				                            <td className='hide'>+15</td>
				                            <td className='hide'>30.000,00</td>
				                            <td className='hide'>20%</td>
				                            <td className='hide'>24.000,00</td>
				                            <td> <button type="button" className="btn btn-outline-primary"> Poruči paket </button> </td>
				                        </tr>
				                    </tbody>
				                </table>
                                <div className='italic'> *Cene su izražene u dinarima sa PDV-om </div>
                                <h3 className='headline1'>Kredite možeš koristiti za plaćanje sledećih usluga:</h3>
                                <div className='hide mainborder col-md-12'>
                                    <table className='bshad table table-striped table-bordered table-light table-hover'>
										<thead>
											<tr>
												<th rowSpan='2'>Usluga</th>
												<th rowSpan='2'>Kategorija</th>
												<th colSpan='4'>Duzina trajanja usluge/cena u kreditima</th>
											</tr>
											<tr>
												<th>3 dana</th>
												<th>7 dana</th>
												<th>30 dana</th>
												<th>Neograniceno</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td rowSpan='3'>Isticanje oglasa u potrazi</td>
												<td>Putnicka vozila</td>
												<td></td>
												<td></td>
												<td>2</td>
												<td></td>
												</tr>
											<tr>
											<td>Delovi i oprema</td>
												<td></td>
												<td></td>
												<td>1.5</td>
												<td></td>
												</tr>
											<tr>
											<td>Ostale kategorije</td>
												<td></td>
												<td></td>
												<td>1.5</td>
												<td></td>
											</tr>
											<tr>
												<td rowSpan='3'>Isticanje oglasa na naslovnoj stranici</td>
												<td>Putnicka vozila</td>
												<td>2.5</td>
												<td></td>
												<td></td>
												<td></td>
											</tr>
											<tr>
												<td>Delovi i oprema</td>
												<td></td>
												<td>1.75</td>
												<td></td>
												<td></td>
											</tr>
											<tr>
												<td>Ostale kategorije</td>
												<td>1</td>
												<td></td>
												<td></td>
												<td></td>
											</tr>
											<tr>
												<td>Oglas na ime kupca ili strane tablice</td>
												<td>Putnicka vozila</td>
												<td></td>
												<td></td>
												<td>2</td>
												<td></td>
											</tr>
											<tr>
												<td>Dodatni oglas na domace tablice</td>
												<td>Putnicka vozila</td>
												<td></td>
												<td></td>
												<td></td>
												<td>1.5</td>
											</tr>
											<tr>
												<td>Dodatni oglas</td>
												<td>Delovi i oprema</td>
												<td></td>
												<td></td>
												<td></td>
												<td>1.25</td>
											</tr>
											<tr>
												<td>Dodatni oglas na domace tablice</td>
												<td>Ostale kategorije</td>
												<td></td>
												<td></td>
												<td></td>
												<td>1.25</td>
											</tr>
											<tr>
												<td>XL oglas u rezultatima pretrage</td>
												<td>Sve kategorije</td>
												<td></td>
												<td></td>
												<td>1.5</td>
												<td></td>
											</tr>
										</tbody>
                                    </table>
                                    <div className='italic'> *1 kredit = 300 RSD ( cena sa PDV-om) </div>
                                </div>
                                <div className='showmobile1'>
				                    <p> Za isticanje oglasa u pretrazi: </p>
				                    <ul>
				                        <li>30 dana = 2 kredita</li>
				                    </ul>
				                    <p> Za isticanje oglasa na naslovnoj stranici </p>
				                    <ul>
                                        <li>5 dana = 4 kredita ( putnička vozila)</li>
                                        <li>5 dana = 3 kredita ( delovi i oprema )</li>
                                        <li>5 dana = 2 kredita ( ostale kategorije )</li>
				                    </ul>
				                    <p> XL oglas u rezultatima pretrage </p>
				                    <ul>
				                        <li>30 dana = 1,5 kredit</li>
				                    </ul>
				                    <p> Dodatni oglas </p>
				                    <ul>
				                        <li>1 oglas = 1,5 kredit</li>
                                    </ul>
                                    <div className='italic'> *1 kredit = 300 RSD ( cena sa PDV-om) </div>
				                </div>
                                <div className="container savetnik">
				                    <div className="row">
				                        <div className="col-md-6 img">
				                            <img src="savetnik.jpg"  alt="" className="img-rounded"/>
				                        </div>
				                        <div className="col-md-6 details">
				                            <blockquote className="silver">
				                                <h5 className="silver">Igor Raić</h5>
				                                <small><cite title="Title">Prodajni savetnik za kupovinu kredita</cite></small>
				                            </blockquote>
				                            <p> <span><i className="fas fa-phone-square"></i></span> 024/415-62-01 <br/> Pon. - pet. (08h - 16h) </p>
				                        </div>
				                    </div>
				                </div>
                            </div>
				        </div>
					</div>
				</div>
			</div>
		);
	}
}

export default Krediti;