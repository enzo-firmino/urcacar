import React, {useState} from 'react';
import {StarFill} from "react-bootstrap-icons";

const StarRating = () => {
    let oui = ["Conduite", "Ponctualité", "Comportement"];
    var stars = [];

    for(let i = 0; i<5; i++){
        stars.push(<StarFill size = "24 "color="green"/>);


    }

    return (

        <div>

            {oui.map((label) => {
                return (
                    <div>
                        <label>
                            {label}
                        </label>
                        {stars.map((star, i )=> {

                            return star;
                        })}

                    </div>
                )

            })}




        </div>


    );
};

export default StarRating;