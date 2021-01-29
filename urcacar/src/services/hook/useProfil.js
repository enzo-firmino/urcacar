import { useEffect, useState } from "react";
import { getInfo } from '../fetch/fetch';

function useDetailTrajet(conducteur){

    const [voiture, setVoiture] = useState(null);
    const [avisRecus, setAvisRecus] = useState([]);

    useEffect(() => {
        for (const avisRecu of conducteur.avisRecu) {
            getInfo(avisRecu).then((response) => {
                setAvisRecus([...avisRecus, response]);
            });
        }
        getInfo(conducteur.voiture).then((response) => {
            setVoiture(response);
        });
    }, []);

    return {voiture, avisRecus};
}
export default useDetailTrajet;

