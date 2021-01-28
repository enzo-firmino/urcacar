import { useEffect, useState } from "react";
import { getInfo } from '../fetch/fetch';

function useDetailTrajet(info){

    const [trajet, setTrajet] = useState(null);
    const [conducteur, setConducteur] = useState(null);

    useEffect(() => {
        getInfo(info.conducteur).then(response => {
            setConducteur(response);
        });
        getInfo(info.trajet).then(response => {
            setTrajet(response);
        });
    }, []);

    return {trajet,conducteur};
}
export default useDetailTrajet;