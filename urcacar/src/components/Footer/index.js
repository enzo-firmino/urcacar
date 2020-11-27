import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";

export function Footer(props) {

    return (
        <Navbar className="footer container" expand="lg" bg="light" variant="light">
            <Nav className="d-flex justify-content-around">
                <Nav.Link href="#search"><Image style={{height:20}} src="https://i.pinimg.com/originals/cd/ab/85/cdab85a392e92623afa27de32443379f.png"/>Rechercher</Nav.Link>
                <Nav.Link href="#add"><Image style={{height:20}} src="https://icons-for-free.com/iconfiles/png/512/create+new+plus+icon-1320183284524393487.png"/>Ajouter</Nav.Link>
                <Nav.Link href="#trajets"><Image style={{height:20}} src="https://image.flaticon.com/icons/png/512/67/67994.png"/>Mes trajets</Nav.Link>
            </Nav>
        </Navbar>
    );
}
