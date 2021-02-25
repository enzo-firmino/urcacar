import React, {useState} from "react";
import { Image, Form, Button, Row, Col } from "react-bootstrap";
import retour from '../../../assets/Retour.png';
import {appendMessage} from "../../../services/fetch/fetch";
import '../../../styles/message.css';
import {useHistory} from "react-router-dom";

export default function Message(props) {


    const history = useHistory();

     let otherUtilisateur = history.location.state.utilisateur;
     let trajet = history.location.state.trajet;

    const listMessage = [
        {
            text: 'ouioui',
            id: '11',
        },
        {
            text: 'ertert',
            id: '11',
        },
        {
            text: 'fsqfe',
            id: '12',
        },
        {
            text: 'vfereza',
            id: '11',
        },
        {
            text: 'aezze',
            id: '12',
        },
        {
            text: 'grtue',
            id: '12',
        },
    ];

    const listMessagesItem = listMessage.map((message) =>
        <MessageItem key={message.text} message={message}/>
    );

    const [message, setMessage] = useState('');

    function sendMessage() {
        appendMessage(message);
    }

    return (
        <>
            <div className="bg-gris">
                <div className="container">
                    <div className="row p-2">
                        <Image className="pp" src={otherUtilisateur.photo} roundedCircle/>
                        <h1>{otherUtilisateur.prenom}   |   {trajet.adresseDepart.ville} - {trajet.adresseArrivee.ville}</h1>
                    </div>
                </div>
            </div>
            <div className="container-conversation">
                <ul className='messageList'>{listMessagesItem}</ul>
                <div>
                    <Form>
                        <Row className="d-flex flex-fill sendingBar">
                            <Form.Control style={{marginTop:"auto", marginBottom:"auto", width:"80%"}} className="bg-gris" type="text" placeholder="Message" onChange={(event) => setMessage(event.target.value)}/>
                            <Button className="transparent" onClick={sendMessage}><Image className="action" src="https://image.winudf.com/v2/image/Y29tLnRyaXNodWx0ZWNoaW5kaWEudGFwMnNlbmRfaWNvbl8xNTM1NDI4MTQxXzAzNg/icon.png?w=170&fakeurl=1"/></Button>
                        </Row>
                    </Form>
                </div>
            </div>
        </>
    );
}


export function MessageItem({message}) {

    let currentUser = '11';

    let isMine = message.id === currentUser;


    return (
        <div className={[
            'message',
            `${isMine ? 'mine' : ''}`,
        ].join(' ')}>
            <div className="bubble-container">
                <div className="bubble" >
                    { message.text }
                </div>
            </div>
        </div>

    )


}

