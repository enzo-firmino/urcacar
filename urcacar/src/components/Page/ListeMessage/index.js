import React, {useContext} from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import profilePicture from '../../../assets/profilepicture.jpg';
import context from '../../../services/store/store';


export default function ListeMessage(props) {
    const {jwt} = useContext(context)

    console.log('jwt :', localStorage.getItem("jwt"));
    return (
        <div className="container" style={{borderTop: "1px solid #58B94B", fontWeight: 'bold'}}>
            <Message name="Emmanuel" trajet="Reims -> Paris"/>
            <Message name="Anne" trajet="Gare de Reims -> I.U.T"/>
        </div>
    );
}

function Message(props){
    return(
        <a className='box' href="/messagerie/id">
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <p className="pTitre text-success">{props.name} - {props.trajet}</p>
                <p>Bonjour, est-il possible de partir 15 minutes 
avant ? </p>
            </div>
            <Image className="pp" src={profilePicture} roundedCircle/>
        </a>
    )
}
