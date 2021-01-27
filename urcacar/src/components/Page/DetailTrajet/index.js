import Container from "react-bootstrap/Container";
import React, {useEffect, useState} from "react";
import Image from "react-bootstrap/Image";
import '../../../styles/detailTrajet.css';

import {GeoAlt, Map} from "react-bootstrap-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Avis from "../../Reusable/Avis";
import {getUser} from "../../../services/fetch/fetch";

export function DetailTrajet() {

    let trajet = {
        depart: 'Reims, 15 Rue de la marne',
        arrive: 'Paris, 85 Avenue Pierre',
        date: 'Mardi 15 avril',
        heureDepart: '12h10',
        heureArrive: '12h50',
        nbPlaceDispo: 4,
        prix: 12,
        recurrence: {
            lundi: true,
            mardi: true,
            mercredi: false,
            jeudi: true,
            vendredi: true,
            samedi: false,
            dimanche: false,
        }
    }

    // let conducteur = {
    //     prenom: 'Romane',
    //     photo: profilePicture,
    //     rang: 1,
    //     status: 1,
    //     dialogue: true,
    //     fumer: false,
    //     musique: true,
    //     vehicle: {
    //         marque: 'Citroen',
    //         modele: 'C4',
    //         annee: '2020',
    //         couleur: 'Bleu',
    //         immatriculation: 'AB-544-LK',
    //         photo: voiture
    //     },
    //     avis: [
    //         {
    //             utilisateur: 'Pierre',
    //             photo: profilePicture,
    //             conduite: 4,
    //             ponctuation: 4,
    //             comportement: 4,
    //         },
    //         {
    //             utilisateur: 'Marie',
    //             photo: profilePicture,
    //             conduite: 3,
    //             ponctuation: 2,
    //             comportement: 4,
    //         }
    //     ]
    // }


    const [conducteur, setConducteur] = useState(null);

    useEffect(() => {
        getUser('11').then((response) =>  {
            console.log('conducteur', response);
            setConducteur(response);
        });
    }, []);



    return (
        <Container className='detailTrajet container bg-light'>
            <Row className='row-padding'>
                <h2>{trajet.date}</h2>
            </Row>
            <Row className='row-padding'>
                { conducteur !== null && <Profil conducteur={conducteur}/>}
                <Col className='border-left'>
                    <RecapTrajet trajet={trajet}/>
                    <Row>
                        <span style={{color: 'rgba(0, 0, 0, 0.6)', paddingRight: '15px'}}>Prix pour un passager</span>
                        <span style={{fontWeight: 'bold', color: 'rgb(5, 71, 82)'}}>{trajet.prix}€</span>
                    </Row>
                    <Row>
                        <span style={{color: 'rgba(0, 0, 0, 0.6)', paddingRight: '15px'}}> Places disponibles</span>
                        <span style={{fontWeight: 'bold', color: 'rgb(5, 71, 82)'}}>{trajet.nbPlaceDispo}</span>
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
                {/*<Col>{ conducteur.voiture !== null &&*/}
                {/*    <Vehicule voiture={conducteur.vehicle}/> }*/}
                {/*</Col>*/}
                <Col className='border-left'>
                    <Avis/>
                </Col>
            </Row>
        </Container>
    );
}

function Profil({conducteur}) {
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
            <span>{conducteur.rang}</span>
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
    return (
        <div>

                <div className="d-flex flex-fill">
                    <p style={{fontSize: 15, width:"50%"}}>Place de la Gare,<br/> 51100 Reims</p>
                    <p/>
                    <p style={{fontSize: 15, width:"50%"}}>Chemin des Rouliers,<br/> 51100 Reims</p>
                </div>
                <div className="d-flex flex-fill border-bottom border-dark">

                    <GeoAlt className="justify-content-center" width="50%" height="35"/>
                    <GeoAlt className="justify-content-center" width="50%" height="35"/>
                </div>
                <div className="d-flex flex-fill">
                    <p style={{fontSize: 15, width:"50%"}}>12h00</p>
                    <p style={{fontSize: 15, width:"50%"}}>12h15</p>
                </div>
            <a className='a-bg-green' style={{marginTop: '20px'}} href='/map'>
                <Map className='align-middle' />
                <span className='align-middle' >  Voir le trajet sur la carte </span>
            </a>
            </div>
    );
}

function Vehicule({voiture}) {
    return (
        <Col>
            <Row>
                <Image
                    style={{height: 50, width: 50, margin: 10}}
                    src="https://www.flaticon.com/svg/static/icons/svg/846/846338.svg"/>
            </Row>
            <Row>
                <span>{voiture.marque} {voiture.modele} {voiture.annee} </span>
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

