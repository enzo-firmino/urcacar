import React from "react";
import Image from "react-bootstrap/Image";
import profilePicture from '../../assets/profilepicture.jpg';
import {ListGroup} from "react-bootstrap";
import { ArrowDown } from 'react-bootstrap-icons';
import { ArrowRight } from 'react-bootstrap-icons';
import { Search } from 'react-bootstrap-icons';
import '../../styles/listeRecherche.css';
import Badge from "react-bootstrap/Badge";


export function ListeRecherche(props) {

    const recherche = {depart: 'Reims', arrive: 'Paris', heureDepart: '12h10', heureArrive: '12h50', nbPassager: 2}

    const trajets = [
        {conducteur: 'Romane', depart: 'Reims', arrive: 'Paris', heureDepart: '12h10', heureArrive: '12h50', prix: 125},
        {conducteur: 'Romane', depart: 'Reims', arrive: 'Paris', heureDepart: '12h10', heureArrive: '12h50', prix: 125},
        {conducteur: 'Romane', depart: 'Reims', arrive: 'Paris', heureDepart: '12h10', heureArrive: '12h50', prix: 125},
        {conducteur: 'Romane', depart: 'Reims', arrive: 'Paris', heureDepart: '12h10', heureArrive: '12h50', prix: 125},
        {conducteur: 'Romane', depart: 'Reims', arrive: 'Paris', heureDepart: '12h10', heureArrive: '12h50', prix: 125},
    ];
    const listeTrajets = trajets.map((trajet, index) => {
            return <Trajet key={index}  trajet={trajet}/>;
        }
    );


    return (
        <div>
            <RecapRecherche recherche={recherche}/>
            <ListGroup>
                {listeTrajets}
            </ListGroup>
        </div>

    );
}

function RecapRecherche(props) {
    return (
        <div className='recapRecherche'>
            <Search/>
            <table>
                <tbody>
                <tr>
                    <td>{props.recherche.depart}</td>
                    <td><ArrowRight /></td>
                    <td>{props.recherche.arrive}</td>
                </tr>
                <tr>
                    <td>{props.recherche.heureDepart}</td>
                    <td><ArrowRight /></td>
                    <td>{props.recherche.heureArrive}</td>
                </tr>
                </tbody>
            </table>
            <span>{props.recherche.nbPassager} passagers</span>

    </div>
    );
}

function Trajet(props) {
    return (
        <div className='trajet'>
            <Image src={profilePicture} roundedCircle fluid/>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <span style={{borderBottom: "1px solid #58B94B", fontWeight: 'bold'}}> {props.trajet.conducteur}</span>
                <table>
                    <tbody>
                    <tr>
                        <td>{props.trajet.heureDepart}</td>
                        <td>{props.trajet.depart}</td>
                    </tr>
                    <tr>
                        <td><ArrowDown /></td>
                        <td><ArrowDown/></td>
                    </tr>
                    <tr>
                        <td>{props.trajet.heureArrive}</td>
                        <td>{props.trajet.arrive}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className='rightBox' >
                Neutre
                <div className='badgeRight'>
                    <Badge variant="success">{props.trajet.prix}€</Badge>
                </div>
            </div>
        </div>
    );
}
