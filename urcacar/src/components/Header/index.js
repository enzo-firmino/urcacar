import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {FormSearchTrajet} from "../FormSearchTrajet";

export function Header(props) {

    return (
            <Navbar expand="lg" bg="success" variant="dark">
                <div className="container">
                    <Link style={{color: 'white'}} to="/">UrcaCar</Link>
                    <Nav className="d-flex flex-fill justify-content-around">
                        <Link style={{color: 'white'}} to="/messagerie">Messagerie</Link>
                        <Link style={{color: 'white'}} to="/profil">Profil</Link>
                        <Link style={{color: 'white'}} to="/notifications">Notifications</Link>
                    </Nav>
                </div>
            </Navbar>

    );
}

