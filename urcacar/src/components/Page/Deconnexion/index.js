import React from "react";
import '../../../styles/form.css';
import '../../../styles/connexion.css';
import { Redirect } from "react-router-dom";

export function Deconnexion(props) {
    localStorage.clear()
    return (
        <Redirect to="/" />
    )
}


