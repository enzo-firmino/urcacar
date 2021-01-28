import React, {useState} from 'react';
import {StarFill} from "react-bootstrap-icons";

const StarRating = () => {
    let oui = ["Conduite", "Ponctualité", "Comportement"];
    var stars = [];

    for(let i = 0; i<5; i++){
<<<<<<< HEAD
        stars.push(<StarFill key={i} className="flex-fill avis" size = "24 "color="green"/>);


=======
        stars.push(<StarFill className="flex-fill avis" size = "24 "color="green"/>);
>>>>>>> a35c0213639327e1fa658d038f0b68cfaccb3854
    }

    return (

        <div className="flex-fill" >

            {oui.map((label) => {
                return (
                    <div className="text-left">
                        <p className="avis" style={{display: "contents"}}>
                            {label}
                        </p>
                        <div>
                            {stars.map((star, i )=> {
                                return star;
                            })}
                        </div>

                    </div>
                )

            })}




        </div>


    );
};

export default StarRating;
