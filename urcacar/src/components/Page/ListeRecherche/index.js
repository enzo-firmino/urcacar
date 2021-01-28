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
import { useHistory } from "react-router-dom";
import useSearch from "../../../services/hook/useSearch";

export function ListeRecherche(props) {
    const history = useHistory();

    const recherche = {
        depart: history.location.state.depart,
        date: history.location.state.date.split('-')[2]+"/"+history.location.state.date.split('-')[1],
        arrive: history.location.state.arrive,
        heureDepart: history.location.state.heureDepart,
        heureArrive: history.location.state.heureArrive,
        nbPassager: history.location.state.nbPassager
    }

    const trajets = useSearch(recherche);

    return (
        <div className='listeRecherche'>
            <RecapRecherche recherche={recherche}/>
            <ListGroup>
                {trajets.map(todo => (
                    <Trajet key={todo.id} trajet={todo}/>
                ))}
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

    const history = useHistory();

    console.log(trajet.conducteur["@id"],trajet["@id"])

    const Click = (evt) => {
        evt.preventDefault();
        history.push({
            pathname: '/trajet',
            state:
            {
                conducteur: trajet.conducteur["@id"],
                trajet: trajet["@id"]
            }
        })
    }

    let recurrenceText = '';

    if (trajet.recurrence != null) {
        for (const [key, value] of Object.entries(trajet.recurrence)) {
            if (value) {
                recurrenceText += key + ' ';
            }
        }
    }

    const date = new Date(trajet.dateDepart);
    const heureDepart = new Date(trajet.heureDepart);
    const heureArrivee = new Date(trajet.heureArrivee);

    let rang;

    switch(trajet.conducteur.rang){
        case 1:
            rang = "NUL"
            break;
        case 2:
            rang = "Neutre"
            break;
        case 3:
            rang = "Recommander"
            break;
        default:
            rang = "Inconnu"
    }

    return (
        <a onClick={Click} className='box'>
            <div className='leftBox'>
                <Image className="pp" src={trajet.conducteur.photo} roundedCircle/>
            <span style={{
                borderBottom: "1px solid #58B94B",
                fontWeight: 'bold'
            }}> {trajet.conducteur.prenom}</span>
                <span style={{fontSize:'20px'}}>{date.getDate()}/{date.getMonth() + 1}</span>
                <table>
                        <tbody>
                        <tr>
                            <td>{heureDepart.getHours()}:{heureDepart.getMinutes()}</td>
                            <td>{trajet.adresseDepart.ville}</td>
                        </tr>
                        <tr>
                            <td><ArrowDown/></td>
                            <td><ArrowDown/></td>
                        </tr>
                        <tr>
                            <td>{heureArrivee.getHours()}:{heureArrivee.getMinutes()}</td>
                            <td>{trajet.adresseArrivee.ville}</td>
                        </tr>
                        </tbody>
                    </table>
            </div>
            <div className='rightBox'>
                {rang}
                <span>{recurrenceText}</span>
                <div className='badgeRight'>
                    <Badge variant="success">{trajet.prix}€</Badge>
                </div>
            </div>
        </a>
    );
}
