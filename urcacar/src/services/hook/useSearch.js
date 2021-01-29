import { useEffect, useState } from "react";
import { Search } from "react-bootstrap-icons";
import { getAllTrajet } from '../fetch/fetch';

function useSearch(recherche){

    const [trajets, setTrajets] = useState([]);

    useEffect(() => {
        getAllTrajet().then(trajets => {
            const t = [];
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