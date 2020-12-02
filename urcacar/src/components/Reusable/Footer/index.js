import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";

export default function Footer(props) {

    return (
        <Navbar className="footer" bg="light">
            <div className="container">
                <Nav className="d-flex flex-fill justify-content-around">
                    <Nav.Link className="text-dark" href="/"><Image style={{height:20}} src="https://i.pinimg.com/originals/cd/ab/85/cdab85a392e92623afa27de32443379f.png"/>Rechercher</Nav.Link>

                    <Nav.Link className="text-dark" href="/addTrajet"><Image style={{height:20}} src="https://icons-for-free.com/iconfiles/png/512/create+new+plus+icon-1320183284524393487.png"/>Ajouter</Nav.Link>

                    <Nav.Link className="text-dark" href="/mesTrajets"><Image style={{height:20}} src="https://image.flaticon.com/icons/png/512/67/67994.png"/>Mes trajets</Nav.Link>
                </Nav>
            </div>
        </Navbar>
    );
}
