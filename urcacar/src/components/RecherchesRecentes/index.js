import React from "react";
import '../../styles/recherchesRecentes.css';
import { ArrowRight } from 'react-bootstrap-icons';
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

export function RecherchesRecentes(props) {

    const recherchesRecentes = [
        {depart: 'Reims', arrive: 'Paris', heureDepart: '12h10', heureArrive: '12h50'},
        {depart: 'Reims', arrive: 'Paris', heureDepart: '12h10', heureArrive: '12h50'},
        {depart: 'Reims', arrive: 'Paris', heureDepart: '12h10', heureArrive: '12h50'},
        {depart: 'Reims', arrive: 'Paris', heureDepart: '12h10', heureArrive: '12h50'}
    ];
    const listRechercheRecente = recherchesRecentes.map((recherche, index) => {
        return <RechercheRecente key={index}  recherche={recherche}/>;
    }
    );

    return (
        <Card className='recherchesRecentes' text='white'>
            <Card.Header>Recherches récentes</Card.Header>
            <ListGroup variant="flush">
                {listRechercheRecente}
            </ListGroup>
        </Card>
    );
}


function RechercheRecente(props) {
    return <ListGroup.Item>
        {props.recherche.depart}  <ArrowRight/>  {props.recherche.arrive}
        <br/>
            {props.recherche.heureDepart}  <ArrowRight/>  {props.recherche.heureArrive}
    </ListGroup.Item>
}
