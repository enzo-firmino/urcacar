import { useEffect, useState } from "react";
import { getInfo } from '../fetch/fetch';

function useDetailTrajet(info){

    const [trajet, setTrajet] = useState({});
    const [conducteur, setConducteur] = useState({});

    useEffect(() => {
        getInfo(info.conducteur).then(conducteur => {
            setConducteur(conducteur);
        });
        getInfo(info.trajet).then(trajet => {
            setTrajet(trajet);
        });
    }, []);

    return {trajet,conducteur};
}
export default useDetailTrajet;