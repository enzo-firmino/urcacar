import { useEffect, useState } from "react";
import { Search } from "react-bootstrap-icons";
import { getInfo } from '../fetch/fetch';

function useSearch(recherche){

    const [trajets, setTrajets] = useState([]);

    useEffect(() => {
        getInfo("/api/trajets").then(trajets => {
            const t = [];
            console.log(trajets)
            
            trajets["hydra:member"].map(trajet => {
                if(recherche.depart.includes(trajet.adresseDepart.adresse)){
                    t.push(trajet);
                }
            })
            setTrajets(trajets["hydra:member"]);
        });
    }, [])

    return trajets;
}
export default useSearch;