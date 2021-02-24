import React from "react";
import { Nav, Navbar, Image, Row } from "react-bootstrap";
import { Bell, Envelope } from "react-bootstrap-icons";
import profilePicture from '../../../assets/profilepicture.jpg';

export default function Header(props) {
    return(
        <Navbar expand="lg" bg="success" variant="dark">
            <div className="container">
                <Nav.Link className="aW" href="/">UrcaCar</Nav.Link>
                {localStorage.getItem("jwt") !== "null" ? (
                    <Row className="d-flex flex-fill justify-content-end">
                        <Nav.Link className="aW" href="/messagerie"><Envelope size={35}/></Nav.Link>
                        <Nav.Link className="aW" href="/profil"><Image style={{height:35, width:35, marginRight:10, marginLeft:10}} src={profilePicture} roundedCircle/></Nav.Link>
                        <Nav.Link className="aW" href="/notifications"><Bell size={35}/></Nav.Link>
                    </Row>
                ) : (
                    <Row className="d-flex flex-fill justify-content-end">
                        <Nav.Link className="aW" href="/login">Connexion</Nav.Link>
                    </Row>
                )}
                
            </div>
        </Navbar>
    );
}

