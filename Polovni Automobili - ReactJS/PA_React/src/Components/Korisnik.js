import React from 'react';


const korisnik = (props) => (

    <article className="Korisnik">
        <h1>broj: {props.broj}</h1>
        <h1>ime: {props.ime} {props.prezime}</h1>
        <h4>godiste: {props.godiste}</h4>
        {/* <h4>pol: {props.pol} </h4> */}
    </article>
	
);

export default korisnik;
