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

            <div className="d-flex flex-row w-100 justify flex-wrap">
                <Image style={{height: 150, width: 150}} src={profilePicture} roundedCircle/>
                <div className="d-flex flex-column ml-4">
                    <div className="d-flex flex-row mb-2">
                        <div className="p-2 mr-5" style={{borderBottom: '2px solid #58B94B', width: 200}}>Romane</div>
                        <div  className="p-2">Neutre</div>
                    </div>

                    <div className="d-flex flex-row mb-2">
                        <div className="p-2 mr-5" style={{height:5}}>12h00</div>
                        <div className="p-2">Gare de Reims</div>
                    </div>
                    <div className="d-flex flex-row mb-2">
                        <div style={{fontSize:40}}className="p-2 mr-5">↓</div>
                        <div className="p-2">↓</div>
                    </div>
                    <div className="d-flex flex-row mb-2" style={{width:20}}>
                        <div className="p-2 mr-5" style={{height:5}}>12h15</div>
                        <div className="p-2">I.U.T</div>
                    </div>


                    <div className="w-100">
                        <div>


                            <p className="mb-0 text-left mt-2">Préférences</p>
                            <div className="d-flex">
                                <Image style={{height: 30, width: 30, marginRight: 10, marginTop: 10}}
                                       src="https://cdn.onlinewebfonts.com/svg/img_216930.png"/>
                                <Image style={{height: 30, width: 30, marginRight: 10, marginTop: 10}}
                                       src="https://webstockreview.net/images/cigar-clipart-vector-14.png"/>
                                <Image style={{height: 30, width: 30, marginRight: 10, marginTop: 10}}
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
                    <p className="ml-5" style={{borderTop: '2px solid #58B94B', width: 1000}}>
                    </p>
                    <h2>Noter un utilisateur</h2>
        </div>
    )
}
