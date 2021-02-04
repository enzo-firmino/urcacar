import React, {useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {ArrowDownUp, StarFill} from "react-bootstrap-icons";
import '../../../styles/form.css';
import '../../../styles/connexion.css';
import background from "../../../assets/route.jpg";
import urca from "../../../assets/logo univ reims.png";
export function Connexion(props) {
    return (
        <div className="container bg-light">
            <Login/>
        </div>
    )
}

function Login() {
    return (
        <div className="formConnexion">
            <div style={{backgroundImage: 'url({background})' }}>

            <h1>UrcaCar</h1>

            <Form className="container">

                <Form.Group as={Col} controlId="">
                    <Form.Control
                        placeholder="Identifiant"
                    />
                </Form.Group>



                <Form.Group as={Col} controlId="">
                    <Form.Control placeholder="Mot de passe"
                        />
                </Form.Group>

                <input type ="submit" value="Connexion"/>
                    
                




            </Form>
            </div>

        </div>

    )
}


