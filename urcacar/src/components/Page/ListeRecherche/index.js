import React from "react";
import Image from "react-bootstrap/Image";
import profilePicture from '../../../assets/profilepicture.jpg';
import {Button, ListGroup} from "react-bootstrap";
import {ArrowDown} from 'react-bootstrap-icons';
import {ArrowRight} from 'react-bootstrap-icons';
import {Search} from 'react-bootstrap-icons';
import '../../../styles/listeRecherche.css';
import Badge from "react-bootstrap/Badge";
import retour from '../../../assets/Retour.png';
import Col from "react-bootstrap/Col";

export function ListeRecherche(props) {

    const recherche = {
        depart: 'Reims',
        date: '12/05',
        arrive: 'Paris',
        heureDepart: '12h10',
        heureArrive: '12h50',
        nbPassager: 2
    }

    const trajets = [
        {
            idTrajet: 1,
            conducteur: 'Romane',
            notation: 'neutre',
            depart: 'Reims',
            arrive: 'Paris',
            date: '12/05',
            heureDepart: '12h10',
            heureArrive: '12h50',
            prix: 125,
            recurrence: {
                lun: true,
                mar: true,
                mer: false,
                jeu: true,
                ven: true,
                sam: false,
                dim: false,
            }
        },
        {
            idTrajet: 2,
            conducteur: 'Romane',
            notation: 'neutre',
            depart: 'Reims',
            arrive: 'Paris',
            date: '12/05',
            heureDepart: '12h10',
            heureArrive: '12h50',
            prix: 125,
            recurrence: null
        },
        {
            idTrajet: 3,
            conducteur: 'Romane',
            notation: 'neutre',
            depart: 'Reims',
            arrive: 'Paris',
            date: '12/05',
            heureDepart: '12h10',
            heureArrive: '12h50',
            prix: 125,
            recurrence: null
        },
        {
            idTrajet: 4,
            conducteur: 'Romane',
            notation: 'neutre',
            depart: 'Reims',
            arrive: 'Paris',
            date: '12/05',
            heureDepart: '12h10',
            heureArrive: '12h50',
            prix: 125,
            recurrence: null
        },
        {
            idTrajet: 5,
            conducteur: 'Romane',
            notation: 'neutre',
            depart: 'Reims',
            arrive: 'Paris',
            date: '12/05',
            heureDepart: '12h10',
            heureArrive: '12h50',
            prix: 125,
            recurrence: {
                lun: true,
                mar: true,
                mer: false,
                jeu: true,
                ven: true,
                sam: false,
                dim: false,
            }
        },
    ];
    const listeTrajets = trajets.map((trajet, index) => {
            return <Trajet key={index} trajet={trajet}/>;
        }
    );

    return (
        <div className='listeRecherche'>
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
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <Button style={{backgroundColor: "transparent", borderColor: "transparent"}} href="/">
                    <Image style={{height: 25, width: 25, marginTop: "auto", marginBottom: "auto"}} src={retour}/>
                </Button>
                <span style={{fontSize: '20px'}}>{props.recherche.date}</span>
                <table>
                    <tbody>
                    <tr>
                        <td>{props.recherche.depart}</td>
                        <td><ArrowRight/></td>
                        <td>{props.recherche.arrive}</td>
                    </tr>
                    <tr>
                        <td>{props.recherche.heureDepart}</td>
                        <td><ArrowRight/></td>
                        <td>{props.recherche.heureArrive}</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <span>{props.recherche.nbPassager} passagers</span>

            </div>
        </div>
    );
}

function Trajet({trajet}) {

    let recurrenceText = '';

    if (trajet.recurrence != null) {
        for (const [key, value] of Object.entries(trajet.recurrence)) {
            if (value) {
                recurrenceText += key + ' ';
            }
        }
    }

    return (
        <a href="/trajet" className='box'>
            <div className='leftBox'>
                <Image className="pp" src={profilePicture} roundedCircle/>
            <span style={{
                borderBottom: "1px solid #58B94B",
                fontWeight: 'bold'
            }}> {trajet.conducteur}</span>
                <span style={{fontSize:'20px', paddingLeft: '25px'}}>{trajet.date}</span>
                <table>
                        <tbody>
                        <tr>
                            <td>{trajet.heureDepart}</td>
                            <td>{trajet.depart}</td>
                        </tr>
                        <tr>
                            <td><ArrowDown/></td>
                            <td><ArrowDown/></td>
                        </tr>
                        <tr>
                            <td>{trajet.heureArrive}</td>
                            <td>{trajet.arrive}</td>
                        </tr>
                        </tbody>
                    </table>
            </div>
            <div className='rightBox'>
                Neutre
                <span>{recurrenceText}</span>
                <div className='badgeRight'>
                    <Badge variant="success">{trajet.prix}€</Badge>
                </div>
            </div>
        </a>
    );
}
