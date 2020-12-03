import React, { useState } from 'react';
import { Form, Button, Dropdown, Row } from "react-bootstrap";
import { ArrowDownUp, PlusCircle, TrashFill } from "react-bootstrap-icons";
import Col from "react-bootstrap/Col";
import MapView from '../../Map';
import '../../../styles/formSearchTrajet.css';

export default function AddTrajet(props) {

    const [depart, setDepart] = useState('');
    const [arrive, setArrive] = useState('');
    const [date, setDate] = useState();
    const [heureDepart, setHeureDepart] = useState();
    const [heureArrive, setHeureArrive] = useState();
    const [nbPassager, setNbPassager] = useState(1);
    const [prix, setPrix] = useState(0);

    return (
        <div>
            <h1>Ajouter un trajet</h1>
            <Form className="container bg-light">

                <Form.Group as={Col} controlId="formGridDepart">
                    <Form.Control
                        className='fullBgField'
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
                <Row style={{borderBottom: "1px solid black", marginRight: 10, marginLeft:10}}>
                        <p style={{marginLeft: 25, marginTop:"auto", marginBottom:"auto"}} className="d-flex flex-fill justify-content-start">Etapes</p>
                        <p style={{marginLeft: 25, marginTop:"auto", marginBottom:"auto"}} className="d-flex flex-fill justify-content-start">24 rue du coin</p>
                        <p style={{marginLeft: 25, marginTop:"auto", marginBottom:"auto"}} className="d-flex flex-fill justify-content-start">15h</p>
                        <Button className="transparent"><TrashFill color="black"/></Button>
                    </Row>
                    <Row style={{marginRight: 10, marginLeft:10}}>
                        <p style={{marginLeft: 25, marginTop:"auto", marginBottom:"auto"}} className="d-flex flex-fill justify-content-start">Etapes</p>
                        <p style={{marginLeft: 25, marginTop:"auto", marginBottom:"auto"}} className="d-flex flex-fill justify-content-start">24 rue du coin</p>
                        <p style={{marginLeft: 25, marginTop:"auto", marginBottom:"auto"}} className="d-flex flex-fill justify-content-start">15h</p>
                        <Button className="transparent"><TrashFill color="black"/></Button>
                    </Row>
                </div>
                
                
                <MapView size={250} />

                <Button
                    className='fullBgField rechercheButton'
                    variant="primary"
                    type="submit">
                    Publier
                </Button>
            </Form>
        </div>
    );
}

