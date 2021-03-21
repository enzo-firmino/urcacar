import React, {useState, useContext} from "react";
import {Button, Col, Form} from "react-bootstrap";
import '../../../styles/form.css';
import '../../../styles/connexion.css';
import context from '../../../services/store/store';
import {connexion} from '../../../action/action';
import { loginFetch } from '../../../services/fetch/fetch';
import { Redirect, useHistory } from "react-router-dom";

export function Connexion(props) {
    return (
        <div className="container bg-light">
            <LoginComponent/>
        </div>
    )
}

function LoginComponent() {
    const {dispatch} = useContext(context)
    const history = useHistory();

    const[login, setLogin] = useState('');
    const[password, setPassword] = useState('');
    const[isLogin, setIsLogin] = useState(false);
    const[Fail, setFail] = useState(false);

    function loginButton(){
        var body = {"username":login,"password":password};
        loginFetch(body, dispatch).then(response => {
            if(response){
                setIsLogin(response);
            }else{
                setFail(true);
            }
            
        }).catch(error => console.log('error', error));
    }

    return !isLogin ? (
        <div className="formConnexion">
            <div style={{backgroundImage: 'url({background})' }}>
            <h1>UrcaCar</h1>
            <p>{Fail ? "Entrez un mot de passe ou adresse mail correcte !" : null}</p>
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
    ) : (
        <Redirect to="/" />
    )
}


