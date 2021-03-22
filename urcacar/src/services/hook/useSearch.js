import { useEffect, useState } from "react";
import { Search } from "react-bootstrap-icons";
import { getInfo } from '../fetch/fetch';

function useSearch(recherche){

    const [trajets, setTrajets] = useState([]);
    const [finish, setFinish] = useState(false);

    useEffect(() => {
        getInfo("/api/trajets").then(trajets => {
            const t = [];
            if (trajets["hydra:member"] !== undefined) {
                trajets["hydra:member"].map(trajet => {
                    if (recherche.depart.adresse.includes(trajet.adresseDepart.adresse.toUpperCase())) {
                        t.push(trajet);
                    }
                    if (recherche.arrive.adresse.includes(trajet.adresseArrivee.adresse.toUpperCase())) {
                        t.push(trajet);
                    }
                })
            }
            setFinish(true);
            setTrajets(t);
        });
    }, [])

    return {trajets,finish};
}
export default useSearch;
