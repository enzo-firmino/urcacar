import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";

export default function Avis(props) {

    return (
        <div style={{borderTop: "1px solid #58B94B", fontWeight: 'bold'}}>
            <h1 className="text-left text-success">Avis</h1>
            <AvisComponent name="Emmanuel"/>
            <AvisComponent name="Jean"/>
        </div>
    );
}

function AvisComponent(props){
    return(
        <>
            <p className="text-left text-success pTitre">{props.name}</p>
            <Image style={{height:100, width:100}} src="https://www.icone-png.com/png/45/44936.png"/>
            
            <Image style={{height:100, width:100}} src="https://www.superprof.fr/images/annonces/professeur-home-etudiant-histoire-profil-litteraire-donne-cours-particuliers-soutien-generalise-disciplines-litteraires-ou.jpg" roundedCircle/>
        </>
    )
}
