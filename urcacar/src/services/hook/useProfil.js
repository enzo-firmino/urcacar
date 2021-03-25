import { useEffect, useState } from "react";
import {getInfo, getUser} from '../fetch/fetch';

function useProfil(history){

    const [utilisateur, setUtilisateur] = useState(null);
    const [avisRecus, setAvisRecus] = useState([]);
    const [isItMyProfil, setIsItMyProfil] = useState(false);

    useEffect(() => {
        if (history.location.state === undefined) {
            getInfo("/api/utilisateur").then((user) => {
                setUtilisateur(user);

            }).catch((err) => console.error(err));
            setIsItMyProfil(true);

        } else {
            getUser(history.location.state.conducteur['@id']).then((user) => {
                setUtilisateur(user);
            }).catch((err) => console.error(err));
            setIsItMyProfil(false);
        }
    }, []);

    return {utilisateur, avisRecus, isItMyProfil};
}
export default useProfil;
