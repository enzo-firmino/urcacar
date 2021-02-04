import {CONNEXION} from '../../action/action';

export default function reducer(state, action) {

    switch (action.type) {
        //Connexion fonctionnel !
        case CONNEXION:
            return {...state, jwt: action.jwt};
        default:
            return state;
    }
    
}