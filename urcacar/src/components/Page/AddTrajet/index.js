import React, { useState, useEffect } from 'react';
import { Form, Button, Dropdown, Row } from "react-bootstrap";
import { ArrowDownUp, Check, PlusCircle, TrashFill } from "react-bootstrap-icons";
import Col from "react-bootstrap/Col";
import MapView from '../../Map';
import '../../../styles/form.css';
import { appendTrajet, getInfo } from '../../../services/fetch/fetch';
import { Popup } from 'leaflet';
import { Redirect, useHistory } from 'react-router';

export default function AddTrajet(props) {

    const [depart, setDepart] = useState('');
    const [arrive, setArrive] = useState('');
    const [departVille, setDepartVille] = useState('');
    const [arriveVille, setArriveVille] = useState('');
    const [date, setDate] = useState('');
    const [nbPassager, setNbPassager] = useState(1);
    const [heureDepart, setHeureDepart] = useState('');
    const [heureArrive, setHeureArrive] = useState('');
    const [prix, setPrix] = useState(0);
    const [etapes, setEtapes] = useState([]);
    const [adresses, setAdresses] = useState([]);
    const history = useHistory();

    
    useEffect(() =>  {
        setEtapes(etape => [...etape,"24 rue du coin/15h"]);
        setEtapes(etape => [...etape,"28 rue du milieu/13h30"]);
        getInfo("/api/adresses").then(response => {
            setAdresses(response["hydra:member"]);
        })
    },[])

    

    function publish(e){
        e.preventDefault();
        const trajet = {
            prix: prix,
            nbPlace: nbPassager,
            dateDepart: date,
            heureArrivee: heureArrive,
            heureDepart: heureDepart,
            conducteur: "api/utilisateurs/1",
            adresseDepart: {adresse:depart, ville: departVille},
            adresseArrivee: {adresse:arrive, ville: arriveVille},
        }
        appendTrajet(trajet).then(r => {
            if(r.id !== undefined) {
                history.push({
                    pathname: '/'
                })
            }
        });
    }

    const [active, setActive] = useState(true);

    //Sécurité
    if(localStorage.getItem("jwt") === null){
        return <Redirect to="/" />
    }

    return (
        <div className='addTrajet'>
            <h1>Ajouter un trajet</h1>
            <Form className="container bg-light" onSubmit={(e) => publish(e)}>

                <Form.Group as={Row} controlId="formGridDepart">
                    <Col>
                        <Form.Control
                            className='fullBgField'
                            type="text"
                            placeholder="Départ"
                            value={depart.toUpperCase()}
                            onChange={e => setDepart(e.target.value.toUpperCase())}/>
                    </Col>
                    <Col>
                        <Form.Control
                            className='fullBgField'
                            type="text"
                            placeholder="Ville de départ"
                            value={departVille.toUpperCase()}
                            onChange={e => setDepartVille(e.target.value.toUpperCase())}/>
                    </Col>
                </Form.Group>

                <Button
                    variant="outline-success"
                    onClick={ () => {
                        let temp = depart;
                        setDepart(arrive);
                        setArrive(temp);
                    }}
                >
                    <ArrowDownUp/>
                </Button>

                <Form.Group as={Row} controlId="formGridArrive">
                    <Col>
                        <Form.Control
                            className='fullBgField'
                            type="text"
                            placeholder="Arrivée"
                            value={arrive.toUpperCase()}
                            onChange={e => setArrive(e.target.value.toUpperCase())}/>
                    </Col>
                    <Col>
                        <Form.Control
                            className='fullBgField'
                            type="text"
                            placeholder="Ville d'arrivée"
                            value={arriveVille.toUpperCase()}
                            onChange={e => setArriveVille(e.target.value.toUpperCase())}/>
                    </Col>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridDate">
                        <Form.Label>Date départ</Form.Label>
                        <Form.Control
                            className= {new Date(date) > new Date() ? "emptyBgField" : "emptyBgFieldNotValid"}
                            type="date"
                            placeholder="Date"
                            value={date}
                            onChange={e => {setDate(e.target.value); setActive(new Date(e.target.value) > new Date())}}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridNbPassagers">
                        <Form.Label>Nombre de passagers</Form.Label>
                        <Form.Control
                            className="emptyBgField"
                            type="number"
                            min="1"
                            max="4"
                            placeholder="Nombre passagers"
                            value={nbPassager}
                            onChange={e => setNbPassager(parseInt(e.target.value))}/>
                    </Form.Group>
                </Form.Row>


                <Form.Row>

                    <Form.Group as={Col} controlId="formGridHeureDepart">
                        <Form.Label>Heure de départ</Form.Label>
                        <Form.Control
                            className="emptyBgField"
                            type="time"
                            placeholder="Heure départ"
                            value={heureDepart}
                            onChange={e => setHeureDepart(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridHeureArrive">
                        <Form.Label>Heure d'arrivée</Form.Label>
                        <Form.Control
                            className="emptyBgField"
                            type="time"
                            placeholder="Heure arrivée"
                            value={heureArrive}
                            onChange={e => setHeureArrive(e.target.value)}/>
                    </Form.Group>


                </Form.Row>

                <Form.Row>

                    <Form.Group as={Col} controlId="formGridPrix">
                        <Form.Label>Prix du trajet</Form.Label>
                        <Form.Control
                            className="emptyBgField"
                            type="int"
                            placeholder="0€"
                            value={prix}
                            onChange={e => setPrix(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridHeureArrive">
                        <Form.Label></Form.Label>

                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Récurrence
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Form.Check className="text-left" type="checkbox" label="Lundi" />
                                <Form.Check className="text-left" type="checkbox" label="Mardi" />
                                <Form.Check className="text-left" type="checkbox" label="Mercredi" />
                                <Form.Check className="text-left" type="checkbox" label="Jeudi" />
                                <Form.Check className="text-left" type="checkbox" label="Vendredi" />
                                <Form.Check className="text-left" type="checkbox" label="Samedi" />
                                <Form.Check className="text-left" type="checkbox" label="Dimanche" />
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Group>


                </Form.Row>

                <Row className="bg-success rounded-pill">
                    <p style={{marginLeft: 25, marginTop:"auto", marginBottom:"auto"}} className="d-flex flex-fill justify-content-start">Étapes</p>
                    <Button className="transparent" >
                        <PlusCircle/>
                    </Button>
                </Row>
                <div>
                    {etapes.map(values => {
                        let value = values.split('/');
                        return (
                            <Row key={value[0]} style={{borderBottom: "1px solid black", marginRight: 10, marginLeft:10}}>
                                <p style={{marginLeft: 25, marginTop:"auto", marginBottom:"auto"}} className="d-flex flex-fill justify-content-start">Étapes</p>
                                <p style={{marginLeft: 25, marginTop:"auto", marginBottom:"auto"}} className="d-flex flex-fill justify-content-start">{value[0]}</p>
                                <p style={{marginLeft: 25, marginTop:"auto", marginBottom:"auto"}} className="d-flex flex-fill justify-content-start">{value[1]}</p>
                                <Button className="transparent" onClick={ () => {}}><TrashFill color="black"/></Button>
                            </Row>
                        )
                    })}
                </div>

                <Button onClick={(e) => publish(e)}
                    className="fullBgField rechercheButton"
                    variant="primary"
                    type="submit"
                    disabled={!active}>
                    Publier
                </Button>
            </Form>
        </div>
    );
}

