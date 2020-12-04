import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import StarRating from '../Rating'

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
        <div className="box" style={{height:172}}>
            <div className="d-flex flex-fill" style={{height:"100%"}}>
                <div style={{marginRight:10}}>
                    <p className="text-left text-success pTitre">{props.name}</p>
                    <Image className="medail" src="https://www.icone-png.com/png/45/44936.png"/>
                </div>
                <StarRating/>
                <Image className="float-right avis" src="https://www.superprof.fr/images/annonces/professeur-home-etudiant-histoire-profil-litteraire-donne-cours-particuliers-soutien-generalise-disciplines-litteraires-ou.jpg" roundedCircle/>
            </div>
        </div>
    )
}
