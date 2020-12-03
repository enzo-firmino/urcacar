import React, {useState} from "react";
import '../../../styles/mesTrajets.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch, NavLink
} from "react-router-dom";
import Image from "react-bootstrap/Image";
import profilePicture from "../../../assets/profilepicture.jpg";
import {ArrowDown} from "react-bootstrap-icons";
import Badge from "react-bootstrap/Badge";
import {ListGroup} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

export function MesTrajetsReservations(props) {
        let { path, url } = useRouteMatch();

    const mesReservations = [
        {idTrajet: 1, conducteur: 'Romane',date:'12/05', depart: 'Reims', arrive: 'Paris',
            heureDepart: '12h10', heureArrive: '12h50', prix: 125},

        {idTrajet: 2, conducteur: 'Romane',date:'16/05', depart: 'Reims', arrive: 'Paris',
            heureDepart: '12h10', heureArrive: '12h50', prix: 125},
    ];

    const mesTrajets = [
        {idTrajet: 1,date:'12/05', depart: 'Reims', arrive: 'Paris',
            heureDepart: '12h10', heureArrive: '12h50', prix: 125, nbPlaces: 4, nbPassagers: 3},

        {idTrajet: 2,date:'16/05', depart: 'Reims', arrive: 'Paris',
            heureDepart: '12h10', heureArrive: '12h50', prix: 125, nbPlaces: 4, nbPassagers: 3},
    ];

    const [mesReservationsCurrentLink, setMesReservationsCurrentLink] = useState(true);
    const [mesTrajetsCurrentLink, setMesTrajetsCurrentLink] = useState(false);


    return (
        <div className='mesTrajets'>
            <Navbar>
                    <NavLink
                          to={`${url}/mesReservations`}
                          activeStyle={{
                              borderBottom: "solid 2px black",
                          }}
                          className={mesReservationsCurrentLink}
                    >Mes Réservations</NavLink>
                    <div className='separateur'/>
                    <NavLink
                          className={mesReservationsCurrentLink}
                          to={`${url}/mesTrajets`}
                          activeStyle={{
                              borderBottom: "solid 2px black",
                          }}>Mes Trajets</NavLink>
            </Navbar>

            <Switch>
                <Route exact path={path}>
                    <MesReservations reservations={mesReservations}/>
                </Route>
                <Route path={`${path}/mesTrajets`}>
                    <MesTrajets trajets={mesTrajets} demandesReservations={mesReservations}/>
                </Route>
                <Route path={`${path}/mesReservations`}>
                    <MesReservations reservations={mesReservations}/>
                </Route>
            </Switch>
        </div>
    );
}

function MesTrajets({trajets, demandesReservations}) {
    const mesTrajets = trajets.map((trajet, index) =>
        <MonTrajet key={index} trajet={trajet} />
    );
    const mesDemandesReservation = demandesReservations.map((demande, index) =>
        <MaDemandeReservation key={index} demande={demande} />
    );
    return (
        <div className='mesTrajets'>
            <div className='div-padding-top-bottom'>
                <span className='span-title'>Mes trajets</span>
                <ListGroup>
                    {mesTrajets}
                </ListGroup>
            </div>
            <div>
                <span className='span-title'>Mes demandes de réservations</span>
                <ListGroup>
                    {mesDemandesReservation}
                </ListGroup>
            </div>

        </div>

    );
}

function MesReservations({reservations}) {
    const reservationAttente = reservations.map((trajet, index) =>
          <MaReservation key={index} trajet={trajet} />
    );
    const reservationAcceptee = reservations.map((trajet, index) =>
        <MaReservation key={index} trajet={trajet} />
    );
    return (
        <div className='mesReservations'>
            <div className='div-padding-top-bottom'>
                <span className='span-title'>Réservation acceptée</span>
                <ListGroup>
                    {reservationAcceptee}
                </ListGroup>
            </div>
            <div>
                <span className='span-title'>Réservation en attente</span>
                <ListGroup>
                    {reservationAttente}
                </ListGroup>
            </div>

        </div>

    );
}

function MonTrajet({trajet}) {
    return (
        <a href="/trajet" className='box' >
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
            <span style={{fontSize:'20px', paddingLeft: '25px'}}>{trajet.date}</span>
            <div className='rightBox'>
                <span>{trajet.nbPassagers} / {trajet.nbPlaces} Passagers</span>
                <div className='badgeRight'>
                    <Button variant="danger" className='btn-badge'>Annuler</Button>
                    <Badge variant="success">{trajet.prix}€</Badge>
                </div>
            </div>
        </a>
    );
}

function MaReservation({trajet}) {

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
                <div className='badgeRight'>
                    <Button variant="danger" className='btn-badge'>Annuler</Button>
                    <Badge variant="success">{trajet.prix}€</Badge>
                </div>
            </div>
        </a>
    );
}

function MaDemandeReservation({demande}) {
    return (
        <div className='box' >
            <Image className="pp" src={profilePicture} roundedCircle/>
            <div style={{display: 'flex', flexDirection: 'column'}}>
            <span style={{
                borderBottom: "1px solid #58B94B",
                fontWeight: 'bold'
            }}> {demande.conducteur}</span>
                <table>
                    <tbody>
                    <tr>
                        <td>{demande.heureDepart}</td>
                        <td>{demande.depart}</td>
                    </tr>
                    <tr>
                        <td><ArrowDown/></td>
                        <td><ArrowDown/></td>
                    </tr>
                    <tr>
                        <td>{demande.heureArrive}</td>
                        <td>{demande.arrive}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <span style={{fontSize:'20px', paddingLeft: '25px'}}>{demande.date}</span>
            <div className='rightBox'>
                Neutre
                <div className='badgeRight'>
                    <Button variant="danger" className='btn-badge'>Refuser</Button>
                    <Button variant="success" className='btn-badge'>Accepter</Button>
                </div>
            </div>
        </div>
    );
}
