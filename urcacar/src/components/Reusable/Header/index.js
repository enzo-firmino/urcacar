import React from "react";
import { Nav, Navbar, Image } from "react-bootstrap";
import { Bell, Envelope } from "react-bootstrap-icons";
import profilePicture from '../../../assets/profilepicture.jpg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export function Header(props) {

    return (
        
            <Navbar expand="lg" bg="success" variant="dark">
                <div className="container">
                    <Link className="aW" to="/">UrcaCar</Link>
                    <Nav className="d-flex flex-fill justify-content-end">
                    
                        <Link className="aW" to="/messagerie"><Envelope size={35}/></Link>
                        <Link className="aW" to="/profil"><Image style={{height:35, width:35, marginRight:10, marginLeft:10}} src={profilePicture} roundedCircle/></Link>
                        <Link className="aW" to="/notifications"><Bell size={35}/></Link>
                    </Nav>
                </div>
            </Navbar>

    );
}

