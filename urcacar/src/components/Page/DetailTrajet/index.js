import Container from "react-bootstrap/Container";
import React from "react";
import profilePicture from '../../../assets/profilepicture.jpg';
import voiture from '../../../assets/c4.png';
import Image from "react-bootstrap/Image";
import '../../../styles/detailTrajet.css';

import {ArrowDown, GeoAlt} from "react-bootstrap-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import MapView from "../../Map";

export function DetailTrajet(props) {

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

    let conducteur = {
        prenom: 'Romane',
        photo: profilePicture,
        notation: 'neutre',
        preferences: {
            discussion: true,
            fumer: false,
            musique: true,
        },
        vehicle: {
            marque: 'Citroen',
            modele: 'C4',
            annee: '2020',
            couleur: 'Bleu',
            immatriculation: 'AB-544-LK',
            photo: voiture
        },
        avis: [
            {
                utilisateur: 'Pierre',
                photo: profilePicture,
                conduite: 4,
                ponctuation: 4,
                comportement: 4,
            },
            {
                utilisateur: 'Marie',
                photo: profilePicture,
                conduite: 3,
                ponctuation: 2,
                comportement: 4,
            }
        ]
    }

    return (
        <Container className='detailTrajet container bg-light'>
            <Row className='row-padding'>
                <h2>{trajet.date}</h2>
            </Row>
            <Row className='row-padding'>
                <Col className='profil'>
                    <Row>
                        <Image src={conducteur.photo} roundedCircle/>
                    </Row>
                    <Row>
                        <h3>{conducteur.prenom}</h3>
                    </Row>
                    <Row>
                        <span>{conducteur.notation}</span>
                    </Row>
                    <Row>
                        <div className='preferences'>
                            <Image className={conducteur.preferences.discussion.toString()}
                                   style={{height: 50, width: 50, margin: 10}}
                                   src="https://cdn.onlinewebfonts.com/svg/img_216930.png"/>
                            <Image className={conducteur.preferences.fumer.toString()}
                                   style={{height: 50, width: 50, margin: 10}}
                                   src="https://webstockreview.net/images/cigar-clipart-vector-14.png"/>
                            <Image className={conducteur.preferences.musique.toString()}
                                   style={{height: 50, width: 50, margin: 10}}
                                   src="https://img.icons8.com/metro/452/music.png"/>
                        </div>
                    </Row>
                </Col>
                <Col>
                    <Row className='recapTrajet'>
                        <table>
                            <tbody>
                            <tr>
                                <td>{trajet.heureDepart}</td>
                                <td><GeoAlt/></td>
                                <td>{trajet.depart}</td>
                            </tr>
                            <tr>
                                <td/>
                                <ArrowDown/>
                                <td/>
                            </tr>
                            <tr>
                                <td>{trajet.heureArrive}</td>
                                <td><GeoAlt/></td>
                                <td>{trajet.arrive}</td>
                            </tr>
                            </tbody>
                        </table>
                    </Row>
                    <Row>
                        <span>Prix pour un passager : {trajet.prix}€</span>
                    </Row>
                    <Row>
                        <span> Places disponibles : {trajet.nbPlaceDispo}</span>
                    </Row>
                </Col>
            </Row>
            <Row className='row-padding'>
                <Col className='btn-bg-green'>
                    <Button>Contacter</Button>
                    <Button>Réserver</Button>
                </Col>
            </Row>
            <Row className='row-padding'>
                <Col>
                    <Vehicule voiture={conducteur.vehicle}/>
                </Col>
                <Col>
                    <MapView />
                </Col>
            </Row>
        </Container>
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

