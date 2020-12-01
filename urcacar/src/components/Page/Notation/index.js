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
        <div className="row p-5 text-left">
            <h1 className="text-left" style={{marginBottom: 1, color: "#58B94B"}}>Mardi 12 Avril</h1>

            <div className="d-flex flex-row w-100 justiry flex-wrap">
                <Image style={{height: 150, width: 150}} src={profilePicture} roundedCircle/>
                <div className="d-flex flex-column ml-4">
                    <div className="d-flex flex-row mb-2">
                        <div className="p-2 mr-5">Romane</div>
                        <div className="p-2">Neutre</div>
                    </div>
                    <div className="p-2" style={{borderTop: '1px solid #58B94B', borderBottom: '1px solid #58B94B'}}>
                        trajets...
                    </div>
                    <div className="w-100">
                        <div>
                            <p className="mb-0 text-left mt-2">Préférences</p>
                            <div className="d-flex">
                                <Image style={{height: 20, width: 20, marginRight: 10, marginTop: 10}}
                                    src="https://cdn.onlinewebfonts.com/svg/img_216930.png"/>
                                <Image style={{height: 20, width: 20, marginRight: 10, marginTop: 10}}
                                    src="https://webstockreview.net/images/cigar-clipart-vector-14.png"/>
                                <Image style={{height: 20, width: 20, marginRight: 10, marginTop: 10}}
                                    src="https://img.icons8.com/metro/452/music.png"/>
                            </div>
                        </div>
                    </div>
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
