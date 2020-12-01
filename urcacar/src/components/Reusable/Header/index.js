import React from "react";
import { Nav, Navbar } from "react-bootstrap";
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
                    <Nav className="d-flex flex-fill justify-content-around">
                        <Link className="aW" to="/messagerie">Messagerie</Link>
                        <Link className="aW" to="/profil">Profil</Link>
                        <Link className="aW" to="/notifications">Notifications</Link>
                    </Nav>
                </div>
            </Navbar>

    );
}

