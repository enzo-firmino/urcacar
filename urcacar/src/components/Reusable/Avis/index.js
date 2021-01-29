import React from "react";
import {Image, ListGroup} from "react-bootstrap";
import Table from "react-bootstrap/Table";

export default function Avis({listeAvis}) {

    return (
        <div style={{borderTop: "1px solid #58B94B", fontWeight: 'bold'}}>
            <h1 className="text-left text-success">Avis</h1>
            {listeAvis.length > 0 ? <ListGroup>
                {listeAvis.map(avis => (
                    <AvisComponent key={avis['@id']} avis={avis}/>
                ))}
            </ListGroup>:<p>Aucun avis n'a encore été posté pour cet utilisateur.</p>}
        </div>
    );
}

function AvisComponent({avis}){
    return(
        <div className="box" style={{height:172}}>
            <div className="d-flex flex-fill" style={{height:"100%"}}>
                <div style={{marginRight:10}}>
                    <p className="text-left text-success pTitre">{avis.emetteur}</p>
                    <Image className="medail" src="https://www.icone-png.com/png/45/44936.png"/>
                </div>
                <Table>
                    <tbody>
                    <tr>
                        <td>Ponctualité</td>
                        <td>{avis.ponctualite}</td>
                    </tr>
                    <tr>
                        <td>Comportement</td>
                        <td>{avis.comportement}</td>
                    </tr>
                    <tr>
                        <td>Conduite</td>
                        <td>{avis.conduite}</td>
                    </tr>
                    </tbody>
                </Table>
                {/*<StarRating/>*/}
                <Image className="float-right avis" src="https://www.superprof.fr/images/annonces/professeur-home-etudiant-histoire-profil-litteraire-donne-cours-particuliers-soutien-generalise-disciplines-litteraires-ou.jpg" roundedCircle/>
            </div>
        </div>
    )
}
