import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import profilePicture from '../../../assets/profilepicture.jpg';


export default function ListeMessage(props) {

    return (
        <div style={{borderTop: "1px solid #58B94B", fontWeight: 'bold'}}>
            <Message name="Emmanuel" trajet="Reims -> Paris"/>
            <Message name="Anne" trajet="Gare de Reims -> I.U.T"/>
        </div>
    );
}

function Message(props){
    return(
        <a className='trajet' href="/messagerie/id">
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <p className="pTitre text-success">{props.name} - {props.trajet}</p>
                <p>Bonjour, est-il possible de partir 15 minutes 
avant ? </p>
            </div>
            <Image src={profilePicture} roundedCircle/>
        </a>
    )
}
