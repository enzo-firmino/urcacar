import React from "react";
import profilePicture from '../../assets/profilepicture.jpg';
import Image from "react-bootstrap/Image";
import { Col, Form, Row } from "react-bootstrap";

export function Profil(props) {
    return (
        <div className="container">
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
        <Title/>
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Row>
                    <Col>
                        <Form.Label>Marque</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control type="email" placeholder="Enter email" />
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
        </>
    )
}

function Notification(){
    return (
        <>
        </>
    )
}

function Title(){
    return (
        <div style={{borderBottom: "1px solid #58B94B", fontWeight: 'bold'}}>
            <h1 className="text-left">Véhicule</h1>
        </div>
    )
}