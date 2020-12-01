import React from "react";
import profilePicture from '../../assets/profilepicture.jpg';
import Image from "react-bootstrap/Image";
import { Col, Container, Form, Row } from "react-bootstrap";

export function Profil(props) {
    return (
        <div className="container bg-light">
            <Top/>
            <Vehicule/>
            <Preferences/>
            <Notification/>
        </div>
    )
}

function Top(){
    return (
    <div className="row p-5">
        <Image style={{height:100, width:100}} src={profilePicture} roundedCircle/>
        <div style={{paddingLeft:10}}>
            <p className="text-left" style={{marginBottom:1}}>Emmanuel</p>
            <p className="text-left" style={{marginBottom:1}}>Neutre</p>
            <p className="text-left" style={{marginBottom:1}}>Etudiant</p>
            <p className="text-left" style={{marginBottom:1}}>1 trajets posté</p>
        </div>
    </div>
    )
}

function Vehicule(){
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

function Preferences(){
    return (
        <>
            <Title titre="Préférences"/>
            <div>
                <Image style={{height:50, width:50, margin:10}} src="https://cdn.onlinewebfonts.com/svg/img_216930.png"/>
                <Image style={{height:50, width:50, margin:10}} src="https://webstockreview.net/images/cigar-clipart-vector-14.png"/>
                <Image style={{height:50, width:50, margin:10}} src="https://img.icons8.com/metro/452/music.png"/>
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
            <h1 className="text-left">{props.titre}</h1>
        </div>
    )
}