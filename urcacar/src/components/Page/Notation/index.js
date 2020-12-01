import React from "react";
import profilePicture from '../../../assets/profilepicture.jpg';
import Image from "react-bootstrap/Image";
import {Col, Container, Form, Row} from "react-bootstrap";

export function Notation(props) {
    return (
        <div className="container bg-light">
            <Top/>
            <Note/>
        </div>
    )
}

function Top() {
    return (
        <div className="row p-5">
            <div className="w-100 ">
                <h1 className="text-left" style={{marginBottom: 1}}>Mardi 12 Avril</h1>
            </div>

            <div className="d-flex flex-grow-1">
                <Image style={{height: 150, width: 150}} src={profilePicture} roundedCircle/>
                <div className="p-2">Romane</div>
                <div className="p-2">Neutre</div>
            </div>

            <div className="container">

                <div className="d-flex flex-column">
                <p className="text-left">Préférences</p>
                </div>
                <div className="d-flex ">

            <Image style={{height: 50, width: 50, margin: 10}}
                       src="https://cdn.onlinewebfonts.com/svg/img_216930.png"/>
                <Image style={{height: 50, width: 50, margin: 10}}
                       src="https://webstockreview.net/images/cigar-clipart-vector-14.png"/>
                <Image style={{height: 50, width: 50, margin: 10}} src="https://img.icons8.com/metro/452/music.png"/>
                </div>
            </div>

        </div>

    )
}

function Note() {
    return (
        <div className="justify-content-center">
            <div className="d-flex flex-column">
                <div className="formSearchTrajet">
                    <h2>Noter un utilisateur</h2>


                </div>
            </div>
        </div>
    )
}


