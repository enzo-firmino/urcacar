import React, { useState, useEffect } from 'react';
import { Form, Button, Dropdown, Row } from "react-bootstrap";
import { ArrowDownUp, PlusCircle, TrashFill } from "react-bootstrap-icons";
import Col from "react-bootstrap/Col";
import MapView from '../../Map';
import '../../../styles/form.css';
import { appendTrajet, getInfo } from '../../../services/fetch/fetch';

export default function AddTrajet(props) {

    const [depart, setDepart] = useState('');
    const [arrive, setArrive] = useState('');
    const [date, setDate] = useState();
    const [nbPassager, setNbPassager] = useState(1);
    const [heureDepart, setHeureDepart] = useState();
    const [heureArrive, setHeureArrive] = useState();
    const [prix, setPrix] = useState(0);
    const [etapes, setEtapes] = useState([]);
    const [adresses, setAdresses] = useState([]);

    useEffect(() =>  {
        setEtapes(etape => [...etape,"24 rue du coin/15h"]);
        setEtapes(etape => [...etape,"28 rue du milieu/13h30"]);
        getInfo("/api/adresses").then(response => {
            setAdresses(response);
        })
    },[])

    console.log(etapes);

    function publish(){
        const trajet = {
            prix: prix,
            nbPlace: nbPassager,
            dateDepart: date,
            heureArrivee: heureArrive,
            heureDepart: heureDepart,
            conducteur: "moi",
            adresseDepart: depart,
            adresseArrivee: arrive,
        }
        appendTrajet(trajet);
    }

    return (
        <div className='addTrajet'>
            <h1>Ajouter un trajet</h1>
            <Form className="container bg-light">

                <Form.Group as={Col} controlId="formGridDepart">
                    <Form.Control
                        className='fullBgField dropdown-content'
                        type="text"
                        placeholder="Départ"
                        value={depart}
                        onChange={e => setDepart(e.target.value)}/>
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

                <Form.Group as={Col} controlId="formGridArrive">
                    <Form.Control
                        className="fullBgField"
                        type="text"
                        placeholder="Arrivée"

                        value={arrive}
                        onChange={e => setArrive(e.target.value)}/>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridDate">
                        <Form.Label>Date départ</Form.Label>
                        <Form.Control
                            className="emptyBgField"
                            type="date"
                            placeholder="Date"
                            value={date}
                            onChange={e => setDate(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridNbPassagers">
                        <Form.Label>Nombre de passagers</Form.Label>
                        <Form.Control
                            className="emptyBgField"
                            type="number"
                            min="1"
                            max="5"
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
                        <Form.Label>Récurrence</Form.Label>

                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Dropdown Button
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
                    <p style={{marginLeft: 25, marginTop:"auto", marginBottom:"auto"}} className="d-flex flex-fill justify-content-start">Etapes</p>
                    <Button className="transparent" >
                        <PlusCircle/>
                    </Button>
                </Row>
                <div>
                    {etapes.map(values => {
                        let value = values.split('/');
                        return (
                            <Row key={value[0]} style={{borderBottom: "1px solid black", marginRight: 10, marginLeft:10}}>
                                <p style={{marginLeft: 25, marginTop:"auto", marginBottom:"auto"}} className="d-flex flex-fill justify-content-start">Etapes</p>
                                <p style={{marginLeft: 25, marginTop:"auto", marginBottom:"auto"}} className="d-flex flex-fill justify-content-start">{value[0]}</p>
                                <p style={{marginLeft: 25, marginTop:"auto", marginBottom:"auto"}} className="d-flex flex-fill justify-content-start">{value[1]}</p>
                                <Button className="transparent" onClick={ () => {}}><TrashFill color="black"/></Button>
                            </Row>
                        )
                    })}
                </div>

                <Button onClick={() => publish()}
                    className='fullBgField rechercheButton'
                    variant="primary"
                    type="submit">
                    Publier
                </Button>
            </Form>
        </div>
    );
}

