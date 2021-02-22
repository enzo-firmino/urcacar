import React, { useEffect, useState } from "react";
import profilePicture from '../../../assets/profilepicture.jpg';
import Image from "react-bootstrap/Image";
import {Col, Container, Form, Row, Spinner} from "react-bootstrap";
import Avis from "../../Reusable/Avis"
import Table from "react-bootstrap/Table";
import {useHistory} from "react-router-dom";
import { getInfo } from "../../../services/fetch/fetch";

export function Profil(props) {

    const history = useHistory();
    const {conducteur} = history.location.state;
    const [personne, setPersonne] = useState('');
    console.log("Conducteur :",conducteur)

    useEffect(() => {
        getInfo(conducteur).then(response => {
            setPersonne(response);
            
        });
    }, [])

    if(personne.length === 0){
        return <Spinner animation="grow" variant="success" />;
    }
    console.log("Profil: ",personne)

    return (
        <div className="container bg-light">
            <Top conducteur={personne}/>
            <Voiture voitureApi={personne.voiture}/>
            <Preferences conducteur={personne}/>
            {/*<Notification/>*/}
            <Avis listeAvis={personne.avisRecu}/>
        </div>
    )
}


function Top({conducteur}){

    let rang;
    
    switch(conducteur.rang){
        case 0:
            rang = "NUL"
            break;
        case 1:
            rang = "Neutre"
            break;
        case 2:
            rang = "Recommander"
            break;
        default:
            rang = "Inconnu"
    }

    return (
        <div className="row p-5">
            <Image className="pp" src={conducteur.photo} roundedCircle/>
            <div style={{paddingLeft:10}}>
                <p className="text-left" style={{marginBottom:1}}>{conducteur.prenom}</p>
                <p className="text-left" style={{marginBottom:1}}>{rang}</p>
                <p className="text-left" style={{marginBottom:1}}>{conducteur.status}</p>
                <p className="text-left" style={{marginBottom:1}}>{conducteur.trajetsProposes.length} trajets proposés</p>
            </div>
        </div>
    )
}

function VoitureForm(){
    const [voiture, setVoiture] = useState('');
    

    return(
        <div>
            <Title titre="Véhicule"/>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Row>
                        <Col>
                            <Form.Label>Marque</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control type="email" placeholder="Marque" />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Row>
                        <Col>
                            <Form.Label>Modèle</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control type="text" placeholder="Modèle" />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Row>
                        <Col>
                            <Form.Label>Année</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control type="annee" placeholder="Année" />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Row>
                        <Col>
                            <Form.Label>Couleur</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control type="color" placeholder="Couleur" />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Row>
                        <Col>
                            <Form.Label>Plaque d'immatriculation</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control type="pImma" placeholder="AB-123-CD" />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Row>
                        <Col>
                            <Form.Label>Photo du véhicule</Form.Label>
                        </Col>
                        <Col>
                            <Form.File id="exampleFormControlFile1" />
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
        </div>
    )
}

function Voiture({voitureApi}){
    const [voiture, setVoiture] = useState('');

    useEffect(() => {
        getInfo(voitureApi).then(response => {
            setVoiture(response);
        });
    }, [])

    if(voiture.length === 0){
        return <Spinner animation="grow" variant="success" />;
    }
    return(
        <div>
            <Title titre="Véhicule"/>
            <Table>
                <tbody>
                <tr>
                    <td>Marque</td>
                    <td>{voiture.marque}</td>
                </tr>
                <tr>
                    <td>Modèle</td>
                    <td>{voiture.modele}</td>
                </tr>
                <tr>
                    <td>Année</td>
                    <td>{voiture.annee}</td>
                </tr>
                <tr>
                    <td>Couleur</td>
                    <td>{voiture.couleur}</td>
                </tr>
                <tr>
                    <td>Immatriculation</td>
                    <td>{voiture.immatriculation}</td>
                </tr>
                <tr>
                    <td>Photo</td>
                    <td><img src={voiture.photo} alt='voiture image'/></td>
                </tr>
                </tbody>
            </Table>
        </div>
    )
}

function Preferences({conducteur}){
    return (
        <>
            <Title titre="Préférences"/>
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
        </>
    )
}

function Notification(){
    return (
        <>
            <Title titre="Notifications"/>
            <Container>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check className="text-left" type="checkbox" label="Réservation acceptée" />
                            <Form.Check className="text-left" type="checkbox" label="Réservation envoyée" />
                            <Form.Check className="text-left" type="checkbox" label="Demande de réservation" />
                            <Form.Check className="text-left" type="checkbox" label="Trajet imminent" />
                        </Form.Group>
                    </Col>
                    <div style={{borderLeft: "1px solid #58B94B", fontWeight: 'bold', margin:10}}/>
                    <Col className="row">
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check className="text-left" type="checkbox" label="Trajet Annulé" />
                            <Form.Check className="text-left" type="checkbox" label="Demande de notation" />
                            <Form.Check className="text-left" type="checkbox" label="Nouvel avis" />
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

function Title(props){
    return (
        <div style={{borderBottom: "1px solid #58B94B", fontWeight: 'bold'}}>
            <h1 className="text-left text-success">{props.titre}</h1>
        </div>
    )
}



