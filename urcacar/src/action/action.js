/*
 * Action types
 */

export const CONNEXION = 'CONNEXION';

/*
 * Action creators
 */

export function connexion(jwt) {
    return {type: CONNEXION, jwt};
}