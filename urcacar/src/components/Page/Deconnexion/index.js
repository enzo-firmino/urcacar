import React, {useState, useContext} from "react";
import {Button, Col, Form} from "react-bootstrap";
import '../../../styles/form.css';
import '../../../styles/connexion.css';
import context from '../../../services/store/store';
import {connexion} from '../../../action/action';
import { loginFetch } from '../../../services/fetch/fetch';
import { useHistory } from "react-router-dom";

export function Deconnexion(props) {
    localStorage.setItem("jwt",null)
    return (
        <div/>
    )
}


