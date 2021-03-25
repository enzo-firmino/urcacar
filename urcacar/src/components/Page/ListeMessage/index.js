import React, {useEffect, useState} from "react";
import {Image, Spinner} from "react-bootstrap";
import profilePicture from '../../../assets/profilepicture.jpg';
import {getConversations, getInfo} from "../../../services/fetch/fetch";
import {useHistory} from "react-router-dom";


export default function ListeMessage(props) {

    const [conversations, setConversations] = useState([]);

    //OK
    useEffect(() => {
        getInfo('/api/conversations').then(r => {
            setConversations(r)
        });
    }, []);

    const listConversationsItem = conversations.map((conversation) =>
        <Conversation key={conversation.envoyeur_id + conversation.destinataire_id} conversation={conversation}/>
    );

    return (
        <div className="container" style={{borderTop: "1px solid #58B94B", fontWeight: 'bold'}}>
            {conversations.length === 0 ? <p> Pas de conversations </p> :
            <ul>
                {listConversationsItem}
            </ul>
            }
        </div>
    );
}

function Conversation({conversation}) {

    const history = useHistory();

    const [otherUtilisateur, setOtherUtilisateur] = useState(null);
    const [utilisateurConnecte, setUtilisateurConnecte] = useState(null);

    //INUTILE
    useEffect(() => {
        getInfo("/api/utilisateur/").then((response) => {
            setUtilisateurConnecte(response);
            let otherUtilisateurId = conversation.envoyeur_id !== response.id ? conversation.destinataire_id : conversation.envoyeur_id;
            getInfo('/api/utilisateur/' + otherUtilisateurId).then((utilisateur) => {
                setOtherUtilisateur(utilisateur);
            });
        });

    }, []);

    const onClick = (evt) => {
        evt.preventDefault();
        history.push({
            pathname: '/messages',
            state: {
                    utilisateurConnecte,
                    otherUtilisateur
                }
        });
    }

    if (otherUtilisateur == null) {
        return <Spinner animation="grow" variant="success" />;
    }

    return (
        <a className='box' onClick={onClick}>
            <Image className="pp" src={otherUtilisateur.photo} roundedCircle/>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <p className="pTitre text-success">{otherUtilisateur.prenom}</p>
                <p>{conversation.texte} </p>
            </div>
        </a>
    )
}
