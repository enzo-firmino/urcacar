import {useReducer} from 'react';
import reducer from '../../services/reducer/reducer';

function useConnexion() {
    const [state, dispatch] = useReducer(reducer, {jwt: {}});

    const {jwt} = state;

    return {jwt, dispatch};
}

export default useConnexion;