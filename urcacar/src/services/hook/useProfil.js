import { useEffect, useState } from "react";
import {getUser} from '../fetch/fetch';

function useProfil(history){

    const [utilisateur, setUtilisateur] = useState(null);
    const [avisRecus, setAvisRecus] = useState([]);
    const [isItMyProfil, setIsItMyProfil] = useState(false);

    useEffect(() => {
        if (history.location.state === undefined) {
            getUser('/api/utilisateurs/11').then((user) => {
                console.log('user', user);
                setUtilisateur(user);

            }).catch((err) => console.error(err));
            setIsItMyProfil(true);

        } else {
            getUser(history.location.state.conducteur['@id']).then((user) => {
                console.log('user', user);
                setUtilisateur(user);
            }).catch((err) => console.error(err));
            setIsItMyProfil(false);
        }
    }, []);

    return {utilisateur, avisRecus, isItMyProfil};
}
export default useProfil;
