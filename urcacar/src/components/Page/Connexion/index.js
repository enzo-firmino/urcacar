import React, {useState, useContext} from "react";
import {Button, Col, Form} from "react-bootstrap";
import '../../../styles/form.css';
import '../../../styles/connexion.css';
import context from '../../../services/store/store';
import {connexion} from '../../../action/action';
import { useHistory } from "react-router-dom";

export function Connexion(props) {
    return (
        <div className="container bg-light">
            <Login/>
        </div>
    )
}

function Login() {
    const {dispatch} = useContext(context)
    const history = useHistory();

    function loginButton(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"username":login,"password":password});

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        return fetch("http://localhost:8000/api/login_check", requestOptions)
        .then(response => response.json())
        .then(data => {
            dispatch(connexion(data.token));
            history.push({
                pathname: '/messagerie',
            })
            localStorage.setItem("jwt",data.token)
        })
        .catch(error => console.log('error', error));
        
    }
    const[login, setLogin] = useState('');
    const[password, setPassword] = useState('');

    return (
        <div className="formConnexion">
            <div style={{backgroundImage: 'url({background})' }}>

            <h1>UrcaCar</h1>

            <Form className="container">

                <Form.Group as={Col} controlId="">
                    <Form.Control
                        onChange={(event)=> setLogin(event.target.value)}
                        placeholder="Identifiant"
                    />
                </Form.Group>



                <Form.Group as={Col} controlId="">
                    <Form.Control placeholder="Mot de passe" type="password"
                        onChange={(event)=> setPassword(event.target.value)}
                        />                                                      
                </Form.Group>

                <Button onClick={()=> loginButton()}>Connexion</Button>
                    
                




            </Form>
            </div>

        </div>

    )
}

