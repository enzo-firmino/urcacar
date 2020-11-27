import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { ArrowDownUp } from 'react-bootstrap-icons';
import '../../styles/formSearchTrajet.css';

export function FormSearchTrajet(props) {


    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${depart}`)
    }

    let currentDate = new Date();


    const [depart, setDepart] = useState('');
    const [arrive, setArrive] = useState('');
    const [date, setDate] = useState(Date());
    const [heureDepart, setHeureDepart] = useState(currentDate.getHours());
    const [heureArrive, setHeureArrive] = useState(currentDate.getHours());
    const [nbPassager, setNbPassager] = useState(1);


    return (
        <Form className="container">

            <Form.Group as={Col} controlId="formGridDepart">
                <Form.Control
                    className='fullBgField'
                    type="text"
                    placeholder="Depart"
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
                    <Form.Control
                        className="emptyBgField"
                        type="date"
                        placeholder="Date"
                        value={date}
                        onChange={e => setDate(e.target.value)}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridHeureDepart">
                    <Form.Control
                        className="emptyBgField"
                        type="time"
                        placeholder="Heure départ"
                        value={heureDepart}
                        onChange={e => setHeureDepart(e.target.value)}/>
                </Form.Group>
            </Form.Row>


            <Form.Row>
                <Form.Group as={Col} controlId="formGridHeureArrive">
                    <Form.Control
                        className="emptyBgField"
                        type="time"
                        placeholder="Heure arrivée"
                        value={heureArrive}
                        onChange={e => setHeureArrive(e.target.value)}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridNbPassagers">
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

            <Button
                className='fullBgField'
                variant="primary"
                type="submit">
                Rechercher
            </Button>
        </Form>);
}

