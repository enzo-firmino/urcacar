import React, {useState} from "react";
import {Form, Button, Row} from 'react-bootstrap';
import Col from "react-bootstrap/Col";
import { ArrowDownUp } from 'react-bootstrap-icons';
import '../../../styles/form.css';
import { Redirect } from "react-router-dom"
import { useHistory } from "react-router-dom";

export function FormSearchTrajet(props) {

    const history = useHistory();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        history.push({
            pathname: '/recherche',
            state:
            {
                depart: {adresse:depart, ville: departVille}, 
                arrive: {adresse:arrive, ville: arriveVille}, 
                date: date, 
                heureDepart: heureDepart, 
                heureArrive: heureArrive, 
                nbPassager: nbPassager
            }
        })
    }

    const [depart, setDepart] = useState('');
    const [arrive, setArrive] = useState('');
    const [departVille, setDepartVille] = useState('');
    const [arriveVille, setArriveVille] = useState('');
    const [date, setDate] = useState('');
    const [heureDepart, setHeureDepart] = useState('');
    const [heureArrive, setHeureArrive] = useState('');
    const [nbPassager, setNbPassager] = useState(1);

    const [active, setActive] = useState(false);

    function Check(){
        if (depart === "" || arrive === "" || departVille === "" || arriveVille === ""){
            setActive(false);
            return null;
        }
        if(date === "" || heureDepart === "" || heureArrive === ""){
            setActive(false);
            return null;
        }
        setActive(true);
    }

    return (

        <div className="formSearchTrajet">
            <h2> Rechercher un trajet</h2>

            <Form className="container" onSubmit={handleSubmit}>

            <Form.Group as={Row} controlId="formGridDepart">
                    <Col>
                        <Form.Control
                            className='fullBgField'
                            type="text"
                            placeholder="D??part"
                            value={depart.toUpperCase()}
                            onChange={e => {setDepart(e.target.value.toUpperCase()); Check()}}/>
                    </Col>
                    <Col>
                        <Form.Control
                            className='fullBgField'
                            type="text"
                            placeholder="Ville de d??part"
                            value={departVille.toUpperCase()}
                            onChange={e => {setDepartVille(e.target.value.toUpperCase()); Check()}}/>
                    </Col>
                </Form.Group>

                <Button
                    variant="outline-success"
                    onClick={ () => {
                        let temp = depart;
                        setDepart(arrive);
                        setArrive(temp);
                        temp = departVille;
                        setDepartVille(arriveVille);
                        setArriveVille(temp);
                    }}
                >
                    <ArrowDownUp/>
                </Button>

                <Form.Group as={Row} controlId="formGridArrive">
                    <Col>
                        <Form.Control
                            className='fullBgField'
                            type="text"
                            placeholder="Arriv??e"
                            value={arrive.toUpperCase()}
                            onChange={e => {setArrive(e.target.value.toUpperCase()); Check()}}/>
                    </Col>
                    <Col>
                        <Form.Control
                            className='fullBgField'
                            type="text"
                            placeholder="Ville d'arriv??e"
                            value={arriveVille.toUpperCase()}
                            onChange={e => {setArriveVille(e.target.value.toUpperCase()); Check()}}/>
                    </Col>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridDate">
                        <Form.Label>Date d??part</Form.Label>
                        <Form.Control
                            className="emptyBgField"
                            type="date"
                            placeholder="Date"
                            value={date}
                            onChange={e => {setDate(e.target.value); Check()}}/>
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
                        <Form.Label>Heure de d??part</Form.Label>
                        <Form.Control
                            className="emptyBgField"
                            type="time"
                            placeholder="Heure d??part"
                            value={heureDepart}
                            onChange={e => {setHeureDepart(e.target.value); Check()}}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridHeureArrive">
                        <Form.Label>Heure d'arriv??e</Form.Label>
                        <Form.Control
                            className="emptyBgField"
                            type="time"
                            placeholder="Heure arriv??e"
                            value={heureArrive}
                            onChange={e => {setHeureArrive(e.target.value); Check()}}/>
                    </Form.Group>


                </Form.Row>

                <Button
                    className='fullBgField rechercheButton'
                    variant="primary"
                    type="submit"
                    disabled={!active}>
                    Rechercher
                </Button>
            </Form>

        </div>

       );
}



