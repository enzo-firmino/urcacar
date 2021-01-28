import Container from "react-bootstrap/Container";
import React, {useEffect, useState} from "react";
import Image from "react-bootstrap/Image";
import '../../../styles/detailTrajet.css';

import {GeoAlt, Map} from "react-bootstrap-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Avis from "../../Reusable/Avis";
import { useHistory } from "react-router-dom";
import useDetailTrajet from "../../../services/hook/useDetailTrajet";
import { getInfo } from "../../../services/fetch/fetch";

export function DetailTrajet() {
    const history = useHistory();
    const {trajet,conducteur} = useDetailTrajet(history.location.state);

    if(trajet === null || conducteur === null){
        return <div/>;
    }
    console.log("Résultat :",trajet, conducteur.voiture)
    return (
        <Container className='detailTrajet container bg-light'>
            <Row className='row-padding'>
                <h2>{trajet.date}</h2>
            </Row>
            <Row className='row-padding'>
                <Profil conducteur={conducteur}/>
                <Col className='border-left'>
                    <RecapTrajet trajet={trajet}/>
                    <Row>
                        <span style={{color: 'rgba(0, 0, 0, 0.6)', paddingRight: '15px'}}>Prix pour un passager</span>
                        <span style={{fontWeight: 'bold', color: 'rgb(5, 71, 82)'}}>{trajet.prix}€</span>
                    </Row>
                    <Row>
                        <span style={{color: 'rgba(0, 0, 0, 0.6)', paddingRight: '15px'}}> Places disponibles</span>
                        <span style={{fontWeight: 'bold', color: 'rgb(5, 71, 82)'}}>{trajet.nbPlace}</span>
                    </Row>
                </Col>
            </Row>
            <Row className='row-btn'>
                <Col className='btn-bg-green'>
                    <a href='/messagerie/id'>Contacter</a>
                </Col>
                <Col className='btn-bg-green'>
                    <Button>Réserver</Button>
                </Col>
            </Row>
            <Row className='row-padding'>
                <Col>
                    <Vehicule v={conducteur.voiture}/>
                </Col>
                <Col className='border-left'>
                    {/*<Avis/>*/}
                </Col>
            </Row>
        </Container>
    );
}

function Profil({conducteur}) {
    let rang;
    switch(conducteur.rang){
        case 1:
            rang = "NUL"
            break;
        case 2:
            rang = "Neutre"
            break;
        case 3:
            rang = "Recommander"
            break;
        default:
            rang = "Inconnu"
    }
    return (
        <Col className='profil'>
        <Row>
            <a href="/profil">
            <Image src={conducteur.photo} roundedCircle/>
            </a>
        </Row>
        <Row>
            <a href="/profil">
            <h3>{conducteur.prenom}</h3>
            </a>
        </Row>
        <Row>
            <span>{rang}</span>
        </Row>
        <Row>
            <div className='preferences'>
                <Image className={conducteur.dialogue.toString()}
                       style={{height: 50, width: 50, margin: 10}}
                       src="https://cdn.onlinewebfonts.com/svg/img_216930.png"/>
                <Image className={conducteur.fumer.toString()}
                       style={{height: 50, width: 50, margin: 10}}
                       src="https://webstockreview.net/images/cigar-clipart-vector-14.png"/>
                <Image className={conducteur.musique.toString()}
                       style={{height: 50, width: 50, margin: 10}}
                       src="https://img.icons8.com/metro/452/music.png"/>
            </div>
        </Row>
    </Col>
    );
}

function RecapTrajet({trajet}) {

    const hD = new Date(trajet.heureDepart);
    const hA = new Date(trajet.heureArrivee);

    return (
        <div>
                <div className="d-flex flex-fill">
                    <p style={{fontSize: 15, width:"50%"}}>{trajet.adresseDepart.adresse}<br/>{trajet.adresseDepart.cp}</p>
                    <p/>
                    <p style={{fontSize: 15, width:"50%"}}>{trajet.adresseArrivee.adresse}<br/>{trajet.adresseArrivee.cp}</p>
                </div>
                <div className="d-flex flex-fill border-bottom border-dark">

                    <GeoAlt className="justify-content-center" width="50%" height="35"/>
                    <GeoAlt className="justify-content-center" width="50%" height="35"/>
                </div>
                <div className="d-flex flex-fill">
                    <p style={{fontSize: 15, width:"50%"}}>{(hD.getHours()<10?'0':'') + hD.getHours()}:{(hD.getMinutes()<10?'0':'') + hD.getMinutes()}</p>
                    <p style={{fontSize: 15, width:"50%"}}>{(hA.getHours()<10?'0':'') + hA.getHours()}:{(hA.getMinutes()<10?'0':'') + hA.getMinutes()}</p>
                </div>
            <a className='a-bg-green' style={{marginTop: '20px'}} href='/map'>
                <Map className='align-middle' />
                <span className='align-middle' >  Voir le trajet sur la carte </span>
            </a>
            </div>
    );
}

function Vehicule({v}) {

    const [voiture, setVoiture] = useState({});

    useEffect(() => {
        getInfo(v).then(response => {
            setVoiture(response);
        });
    }, []);
    let annee = new Date(voiture.annee)

    return (
        <Col>
            <Row>
                <Image
                    style={{height: 50, width: 50, margin: 10}}
                    src="https://www.flaticon.com/svg/static/icons/svg/846/846338.svg"/>
            </Row>
            <Row>
                <span>{voiture.marque} {voiture.modele} {annee.getFullYear()} </span>
            </Row>
            <Row>
                <span>{voiture.couleur}</span>
            </Row>
            <Row>
                <span>Immatriculation : {voiture.immatriculation}</span>
            </Row>
            <Row>
                <Image
                    style={{height: 100, width: "auto"}}
                    src={voiture.photo}/>
            </Row>
            <Row>
            </Row>
        </Col>

    );
}

