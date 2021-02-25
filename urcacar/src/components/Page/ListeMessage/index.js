import React, {useEffect, useState} from "react";
import {Image, Spinner} from "react-bootstrap";
import profilePicture from '../../../assets/profilepicture.jpg';
import {getConversations, getInfo, getTrajets, getUser} from "../../../services/fetch/fetch";
import {useHistory} from "react-router-dom";


export default function ListeMessage(props) {

    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        getConversations(11).then(r => {
            console.log(r);
            setConversations(r['hydra:member'])
        });
    }, []);

    const listConversationsItem = conversations.map((conversation) =>
        <Conversation key={conversation.envoyeur_id + conversation.destinataire_id} conversation={conversation}/>
    );

    return (
        <div className="container" style={{borderTop: "1px solid #58B94B", fontWeight: 'bold'}}>
            <ul>
                {listConversationsItem}
            </ul>
        </div>
    );
}

function Conversation({conversation}) {

    const history = useHistory();

    let currentUtilisateur = {id: '11'};

    let otherUtilisateurId = conversation.envoyeur_id === currentUtilisateur.id ? conversation.destinataire_id : conversation.envoyeur_id;

    const [otherUtilisateur, setOtherUtilisateur] = useState(null);
    const [trajet, setTrajet] = useState(null);

    useEffect(() => {
        getInfo('/api/utilisateurs/' + otherUtilisateurId).then((utilisateur) => {
            setOtherUtilisateur(utilisateur);
            console.log('utilisateur', utilisateur);
        });
        getInfo('/api/trajets/' + conversation.trajet_id).then((trajet) => {
            setTrajet(trajet);
            console.log('trajet', trajet);
        });
    }, []);

    const onClick = (evt) => {
        evt.preventDefault();
        history.push({
            pathname: '/messages',
            state: {
                    utilisateur: otherUtilisateur,
                    trajet: trajet,
                }
        });
    }

    if (otherUtilisateur == null || trajet == null) {
        return <Spinner animation="grow" variant="success" />;
    }

    return (
        <a className='box' onClick={onClick}>
            <Image className="pp" src={otherUtilisateur.photo} roundedCircle/>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <p className="pTitre text-success">{otherUtilisateur.prenom} | {trajet.adresseDepart.ville} - {trajet.adresseArrivee.ville}</p>
                <p>{conversation.texte} </p>
            </div>
        </a>
    )
}
