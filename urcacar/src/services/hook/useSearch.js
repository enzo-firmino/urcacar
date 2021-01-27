import { useEffect, useState } from "react";
import { getAllTrajet } from '../fetch/fetch';

function useSearch(recherche){

    const [trajets, setTrajets] = useState([]);

    useEffect(() => {
        getAllTrajet().then(trajets => {
            setTrajets(trajets["hydra:member"]);
        });
    }, [])

    return trajets;
}
export default useSearch;