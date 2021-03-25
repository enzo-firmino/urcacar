import React, {useEffect, useState} from "react";
import '../../../styles/mesTrajets.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch, NavLink, Redirect
} from "react-router-dom";
import Image from "react-bootstrap/Image";
import { useHistory } from "react-router-dom";
import profilePicture from "../../../assets/profilepicture.jpg";
import {ArrowDown} from "react-bootstrap-icons";
import Badge from "react-bootstrap/Badge";
import {ListGroup, Spinner} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { cancelTrajet, getInfo, getMesTrajets, acceptReservation, refuseReservation } from "../../../services/fetch/fetch";

export function MesTrajetsReservations(props) {
    let { path, url } = useRouteMatch();

    const [utilisateur, setUtilisateur] = useState({});

    useEffect(() => {
        getInfo("/api/utilisateur").then((response) => {
            setUtilisateur(response);
        });
    }, []);

    //Sécurité
    if(localStorage.getItem("jwt") === null){
        return <Redirect to="/" />
    }

    if(Object.keys(utilisateur).length === 0){
        return <Spinner animation="grow" variant="success" />
    }

    return (
        <div className='mesTrajets'>
            <Navbar>
                    <NavLink
                          to={`${url}/mesReservations`}
                          activeStyle={{
                              borderBottom: "solid 2px black",
                          }}
                    >Mes Réservations</NavLink>
                    <div className='separateur'/>
                    <NavLink
                          to={`${url}/mesTrajets`}
                          activeStyle={{
                              borderBottom: "solid 2px black",
                          }}>Mes Trajets</NavLink>
            </Navbar>

            <Switch>
                <Route exact path={path}>
                    <MesReservations reservations={utilisateur.reservations}/>
                </Route>
                <Route path={`${path}/mesTrajets`}>
                    <MesTrajets demandesReservations={utilisateur.trajetsProposes}/>
                </Route>
                <Route path={`${path}/mesReservations`}>
                    <MesReservations reservations={utilisateur.reservations}/>
                </Route>
            </Switch>
        </div>
    );
}

function MesTrajets({demandesReservations}) {

    const [mesTrajets,setMesTrajets] = useState([]);
    const [finish,setFinish] = useState(false);
    useEffect(() => {
        getMesTrajets().then(response => {setMesTrajets(response); setFinish(true)});
    }, [])

    if(mesTrajets.length === 0 && !finish){
        return <Spinner animation="grow" variant="success" />
    }
    if(mesTrajets.length === 0 && finish){
        return <p>Vous n'avez encore proposer aucun trajet.</p>
    }

    const trajets = mesTrajets.map((trajet, index) =>
        <MonTrajet key={index} trajet={trajet} />
    );

    const mesDemandesReservation = demandesReservations.map((demande, index) => {
            return demande.reservations.map((demande, index) => {
                if(!demande.acceptee){
                    return <MaDemandeReservation key={index} demande={demande} />
                }
            })
        }
    );

    return (
        <div className='mesTrajets'>
            <div className='div-padding-top-bottom'>
                <span className='span-title'>Mes trajets</span>
                <ListGroup>
                    {trajets}
                </ListGroup>
            </div>
            <div>
                <span className='span-title'>Mes demandes de réservations</span>
                <ListGroup>
                    {mesDemandesReservation.filter(demande => demande.length > 0 && demande[0] !== undefined).length === 0 ? <p>Aucune demande de reservation pour le moment</p> : mesDemandesReservation}
                </ListGroup>
            </div>

        </div>

    );
}

function MesReservations({reservations}) {

    const reservationAttenteList = reservations.filter((reservation) => !reservation.acceptee);
    const reservationAccepteeList = reservations.filter((reservation) => reservation.acceptee);

    const reservationAttente = reservationAttenteList.map((reservation, index) =>
          <MaReservation key={index} reservation={reservation} />
    );
    const reservationAcceptee = reservationAccepteeList.map((reservation, index) =>
        <MaReservation key={index} reservation={reservation} />
    );
    return (
        <div className='mesReservations'>
            <div className='div-padding-top-bottom'>
                <span className='span-title'>Réservation acceptée</span>
                <ListGroup>
                    {reservationAcceptee.length === 0 ? <p>Aucune réservation acceptée.</p>:reservationAcceptee}
                </ListGroup>
            </div>
            <div>
                <span className='span-title'>Réservation en attente</span>
                <ListGroup>
                    {reservationAttente.length === 0 ? <p>Aucune réservation en attente.</p>:reservationAttente}
                </ListGroup>
            </div>

        </div>

    );
}

function MonTrajet({trajet}) {
    const [monTrajet, setMonTrajet] = useState(trajet);
    function cancel(){
        cancelTrajet(trajet["id"]).then(response => {if(response.ok) setMonTrajet(null)});
    }

    if(monTrajet === null) return null;

    const date = new Date(monTrajet.dateDepart);
    const heureDepart = new Date(monTrajet.heureDepart);
    const heureArrivee = new Date(monTrajet.heureArrivee);

    return (
        <div className='box' >
            <a>
                <span style={{fontSize:'20px'}}>{date.getDate()}/{date.getMonth() + 1}</span>
                <table>
                    <tbody>
                    <tr>
                        <td>{heureDepart.getHours()}:{heureDepart.getMinutes()}</td>
                        <td>{monTrajet.adresseDepart.adresse}</td>
                    </tr>
                    <tr>
                        <td><ArrowDown/></td>
                        <td><ArrowDown/></td>
                    </tr>
                    <tr>
                        <td>{heureArrivee.getHours()}:{heureArrivee.getMinutes()}</td>
                        <td>{monTrajet.adresseArrivee.adresse}</td>
                    </tr>
                    </tbody>
                </table>
            </a>
            <div className='rightBox'>
                <span>{monTrajet.nbPlace} / {monTrajet.nbPlace} Passagers</span>
                <div className='badgeRight'>
                    <Button onClick={() => cancel()} variant="danger" className='btn-badge'>Annuler</Button>
                    <Badge variant="success">{monTrajet.prix}€</Badge>
                </div>
            </div>
        </div>
    );
}

function MaReservation({reservation}) {
    const [trajet, setTrajet] = useState({});
    const [refresh, setRefresh] = useState(false);
    const history = useHistory();

    useEffect(() => {
        getInfo(reservation.trajet).then((response) => {
            setTrajet(response);
        });
    }, [refresh]);

    if(Object.keys(trajet).length === 0) return <Spinner animation="grow" variant="success" />

    function cancel(IDreservation){
        refuseReservation(IDreservation).then(r => {
            console.log(r)
            if(r.ok){
                setRefresh(r.ok);
            }
        });
    }

    function toTrajet(){
        history.push({
            pathname: '/trajet',
            state: {trajet: trajet}
        })
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
            rang = "Recommandé"
            break;
        default:
            rang = "Inconnu"
    }

    if(refresh){
        return <p> Réservation annuler ! </p>
    }
    return (
        <div className='box'>
            <a onClick={toTrajet} className='leftBox'>
                <Image className="pp" src={profilePicture} roundedCircle/>
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
            </a>
            <div className='rightBox'>
                {rang}
                <div className='badgeRight'>
                    <Button onClick={() => cancel(reservation.id)} variant="danger" className='btn-badge'>Annuler</Button>
                    <Badge variant="success">{trajet.prix}€</Badge>
                </div>
            </div>
        </div>
    );
}

function MaDemandeReservation({demande}) {
    const [mesDemande,setMesDemandes] = useState([]);

    useEffect(() => {
        getInfo(demande.trajet).then(response => setMesDemandes(response));
    }, [])

    function accept(demande){
        const res = {
            acceptee: true,
            id: demande.id,
            passager: demande.passager,
            trajet: demande.trajet
        }
        acceptReservation(res);
    }
    const [visible, setVisible] = useState(true);

    function refuse(IDreservation){
        refuseReservation(IDreservation).then(response => {if(response.ok) setVisible(false)});
    }
    if(!visible){
        return null;
    }

    if(mesDemande.length === 0){
        return <Spinner animation="grow" variant="success" />
    }

    const date = new Date(mesDemande.dateDepart);
    const heureDepart = new Date(mesDemande.heureDepart);
    const heureArrivee = new Date(mesDemande.heureArrivee);

    let rang;
    switch(mesDemande.conducteur.rang){
        case 1:
            rang = "NUL"
            break;
        case 2:
            rang = "Neutre"
            break;
        case 3:
            rang = "Recommandé"
            break;
        default:
            rang = "Inconnu"
    }
    return (
        <div className='box' >
            <Image className="pp" src={mesDemande.conducteur.photo} roundedCircle/>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <span style={{
                    borderBottom: "1px solid #58B94B",
                    fontWeight: 'bold'
                }}> {mesDemande.conducteur.prenom}</span>
                <span style={{fontSize:'20px'}}>{date.getDate()}/{date.getMonth() + 1}</span>
                <table>
                    <tbody>
                    <tr>
                        <td>{heureDepart.getHours()}:{heureDepart.getMinutes()}</td>
                        <td>{mesDemande.adresseDepart.ville}</td>
                    </tr>
                    <tr>
                        <td><ArrowDown/></td>
                        <td><ArrowDown/></td>
                    </tr>
                    <tr>
                        <td>{heureArrivee.getHours()}:{heureArrivee.getMinutes()}</td>
                        <td>{mesDemande.adresseArrivee.ville}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className='rightBox'>
                {rang}
                <div className='badgeRight'>
                    <Button onClick={() => refuse(demande.id)} variant="danger" className='btn-badge'>Refuser</Button>
                    <Button onClick={() => accept(demande)} variant="success" className='btn-badge'>Accepter</Button>
                </div>
            </div>
        </div>
    );
}
