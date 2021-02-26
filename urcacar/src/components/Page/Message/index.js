import React, {useEffect, useState} from "react";
import { Image, Form, Button, Row, Col } from "react-bootstrap";
import retour from '../../../assets/Retour.png';
import {appendMessage, getAllMessages, getInfo} from "../../../services/fetch/fetch";
import '../../../styles/message.css';
import {useHistory} from "react-router-dom";

export default function Message() {


    const history = useHistory();

     let otherUtilisateur = history.location.state.otherUtilisateur;
     let utilisateurConnecte = history.location.state.utilisateurConnecte;

    const [messages, setMessages] = useState([]);


    useEffect(() => {
        getAllMessages(otherUtilisateur['@id'], '13').then((messages) => {
            console.log('messages', messages);
            setMessages(messages);
        });
    }, []);



    const listMessagesItem = messages.map((message) => {
        let isMine = message.envoyeur_id === utilisateurConnecte['@id'] ? message.destinataire_id : message.envoyeur_id;
        return <MessageItem key={message.text} message={message} isMine={isMine}/>
    });

    const [messageTexte, setMessage] = useState('');


    function sendMessage() {

        let message = {
            texte: messageTexte,
            envoyeur_id: utilisateurConnecte['@id'],
            destinataire_id: otherUtilisateur['@id'],
            date: Date.now(),
        }

        appendMessage(message);
    }

    return (
        <>
            <div className="bg-gris">
                <div className="container">
                    <div className="row p-2">
                        <Image className="pp" src={otherUtilisateur.photo} roundedCircle/>
                        <h1>{otherUtilisateur.prenom}</h1>
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


export function MessageItem({message, isMine}) {

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

