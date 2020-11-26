import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


export function FormSearchTrajet(props) {


    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${depart}`)
    }

    let currentDate = new Date();

    const [depart, setDepart] = useState('');
    const [arrive, setArrive] = useState('');
    const [date, setDate] = useState(currentDate.getDate());
    const [heureDepart, setHeureDepart] = useState(currentDate.getHours());
    const [heureArrive, setHeureArrive] = useState(currentDate.getHours());
    const [nbPassager, setNbPassager] = useState(1);


    return (
        <Form>

            <Form.Group as={Col} controlId="formGridDepart">
                <Form.Control type="email" placeholder="Depart" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridArrive">
                <Form.Control type="password" placeholder="Arrivée" />
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridDate">
                    <Form.Control type="date"  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridHeureDepart">
                    <Form.Control type="time"  />
                </Form.Group>
            </Form.Row>


            <Form.Row>
                <Form.Group as={Col} controlId="formGridHeureArrive">
                    <Form.Control type="time"  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridNbPassagers">
                    <Form.Control type="range"  />
                </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
                Rechercher
            </Button>
        </Form>);

    //     <form onSubmit={handleSubmit}>
    //     <label>
    //         <input
    //             placeholder='Depart'
    //             type="text"
    //             value={depart}
    //             onChange={e => setDepart(e.target.value)}
    //         />
    //     </label>
    //     <label>
    //         <input
    //             placeholder='Arrivée'
    //             type="text"
    //             value={arrive}
    //             onChange={e => setArrive(e.target.value)}
    //         />
    //     </label>
    //     <label>
    //         <input
    //             type="date"
    //             value={date}
    //             onChange={e => setDate(e.target.value)}
    //         />
    //     </label>
    //     <label>
    //         <input
    //             type="time"
    //             value={heureDepart}
    //             onChange={e => setHeureDepart(e.target.value)}
    //         />
    //     </label>
    //     <label>
    //         <input
    //             type="time"
    //             value={heureArrive}
    //             onChange={e => setHeureArrive(e.target.value)}
    //         />
    //     </label>
    //     <label>
    //         <input
    //             type="range"
    //             value={nbPassager}
    //             onChange={e => setNbPassager(e.target.value)}
    //         />
    //     </label>
    //     <input type="submit" value="Envoyer"/>
    // </form>)
}
