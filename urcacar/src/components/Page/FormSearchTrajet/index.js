import React, {useState} from "react";
import {Form, Button} from 'react-bootstrap';
import Col from "react-bootstrap/Col";
import { ArrowDownUp } from 'react-bootstrap-icons';
import '../../../styles/form.css';
import { Redirect } from "react-router-dom"

export function FormSearchTrajet(props) {

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setRedirect('/recherche');
    }

    const [depart, setDepart] = useState('');
    const [arrive, setArrive] = useState('');
    const [date, setDate] = useState();
    const [heureDepart, setHeureDepart] = useState();
    const [heureArrive, setHeureArrive] = useState();
    const [nbPassager, setNbPassager] = useState(1);
    const [redirect, setRedirect] = useState(null);


    if (redirect) {
        return <Redirect to={redirect} />
    }
    return (

        <div className="formSearchTrajet">
            <h2> Rechercher un trajet</h2>

            <Form className="container" onSubmit={handleSubmit}>

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

                <Button
                    className='fullBgField rechercheButton'
                    variant="primary"
                    type="submit">
                    Rechercher
                </Button>
            </Form>

        </div>

       );
}



