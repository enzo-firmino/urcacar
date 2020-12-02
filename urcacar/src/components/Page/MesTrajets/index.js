import React from "react";
import '../../../styles/mesTrajets.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import Image from "react-bootstrap/Image";
import profilePicture from "../../../assets/profilepicture.jpg";
import {ArrowDown} from "react-bootstrap-icons";
import Badge from "react-bootstrap/Badge";
import {ListGroup} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";
import Nav from "react-bootstrap/Nav";

export function MesTrajetsReservations(props) {
        let { path, url } = useRouteMatch();

    const trajets = [
        {idTrajet: 1, conducteur: 'Romane', depart: 'Reims', arrive: 'Paris', heureDepart: '12h10', heureArrive: '12h50', prix: 125},
        {idTrajet: 2, conducteur: 'Romane', depart: 'Reims', arrive: 'Paris', heureDepart: '12h10', heureArrive: '12h50', prix: 125},
    ];

    return (
        <div className='mesTrajets'>
            <Navbar>
                    <Link to={`${url}/mesReservations`}>Mes Réservations</Link>
                    <div className='separateur'/>
                    <Link to={`${url}/mesTrajets`}>Mes Trajets</Link>
            </Navbar>

            <Switch>
                <Route exact path={path}>
                    <MesReservations reservations={trajets}/>
                </Route>
                <Route path={`${path}/mesTrajets`}>
                    <MesTrajets trajets={trajets}/>
                </Route>
                <Route path={`${path}/mesReservations`}>
                    <MesReservations reservations={trajets}/>
                </Route>
            </Switch>
        </div>
    );
}

function MesTrajets({trajets}) {
    const listeTrajets = trajets.map((trajet, index) =>
            <MonTrajet key={index} trajet={trajet} />
    );
    return (
        <ListGroup>
        {listeTrajets}
    </ListGroup>
    );
}

function MesReservations({reservations}) {
    const listeTrajets = reservations.map((trajet, index) =>
          <MaReservation key={index} trajet={trajet} />
    );
    return (
    <ListGroup>
        {listeTrajets}
    </ListGroup>
    );
}

function MonTrajet({trajet}) {
    return <div/>
}

function MaReservation(props) {

    return (
        <a href="/trajet" className='box'>
            <Image className="pp" src={profilePicture} roundedCircle/>
            <div style={{display: 'flex', flexDirection: 'column'}}>
            <span style={{
                borderBottom: "1px solid #58B94B",
                fontWeight: 'bold'
            }}> {props.trajet.conducteur}</span>
                <table>
                    <tbody>
                    <tr>
                        <td>{props.trajet.heureDepart}</td>
                        <td>{props.trajet.depart}</td>
                    </tr>
                    <tr>
                        <td><ArrowDown/></td>
                        <td><ArrowDown/></td>
                    </tr>
                    <tr>
                        <td>{props.trajet.heureArrive}</td>
                        <td>{props.trajet.arrive}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className='rightBox'>
                Neutre
                <div className='badgeRight'>
                    <Badge variant="success">{props.trajet.prix}€</Badge>
                </div>
            </div>
        </a>
    );
}
