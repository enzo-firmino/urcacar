import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export function Header(props) {

    return (
        <Navbar  expand="lg" bg="success" variant="dark">
            <div className="container">
            <Navbar.Brand className="mr-auto" href="#home">UrcaCar</Navbar.Brand>
            <Nav className="justify-content-end">
                <Nav.Link href="#home">Messagerie</Nav.Link>
                <Nav.Link href="#features">Profil</Nav.Link>
                <Nav.Link href="#pricing">Notifications</Nav.Link>
            </Nav>
            </div>
        </Navbar>
    );
}
