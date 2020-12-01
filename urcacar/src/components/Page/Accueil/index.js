import {FormSearchTrajet} from "../FormSearchTrajet";
import {RecherchesRecentes} from "../RecherchesRecentes";
import React from "react";

export function Accueil(props) {
    return (
        <div>
            <FormSearchTrajet/>
            <RecherchesRecentes/>
        </div>
    )
}
