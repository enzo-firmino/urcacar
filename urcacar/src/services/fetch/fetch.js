const url = "http://localhost:8000";

export function getAll(recherche){
    console.log("https://nominatim.openstreetmap.org/search?q="+recherche+"&format=json")
    return fetch("https://nominatim.openstreetmap.org/search?q="+recherche+"&format=json").then(response => response.json())
}

export function getAllAd(){
    return fetch(url + "/adresses").then(response => response.json())
}

export function getAvis(id){
    return fetch(url + "/avis/" + id).then(response => response.json())
}

/********************************************************************************************************************************
 *********************************************************USER*****************************************************************
 ********************************************************************************************************************************/

export function getUser(id){
    return fetch(url + "/utilisateurs/" + id).then(response => response.json())
}

/********************************************************************************************************************************
*********************************************************TRAJETS*****************************************************************
********************************************************************************************************************************/

export function getAllTrajet(){
    return fetch(url + "/api/trajets").then(response => response.json())
}

export function appendTrajet(trajet) {
    const options = method('POST', body(trajet, mimeType('application/json')));
    return fetch(url + "/api/trajets/", options).then((response) => response.json());
}

export function updateTrajet(trajet) {
    const options = method('PATCH', body(trajet, mimeType('application/json')));
    return fetch(url + '/api/trajets/' + trajet.id, options).then((response) => response.json());
}

export function cancelTrajet(trajetID) {
    return fetch(url + '/api/trajets/' + trajetID, method('DELETE'));
}

/********************************************************************************************************************************
*********************************************************MESSAGE*****************************************************************
********************************************************************************************************************************/

export function getAllMessages(id){
    return fetch(url + "/messages/" + id).then(response => response.json())
}

/********************************************************************************************************************************
*********************************************************GLOBAL*****************************************************************
********************************************************************************************************************************/

export function getInfo(fin){
    return fetch(url + fin).then(response => response.json())
}

/********************************************************************************************************************************
*********************************************************AUTRE*******************************************************************
********************************************************************************************************************************/

function credential(options = {}) {
    return {
        ...options,
        credentials: 'include',
    };
}

function method(method, options = {}) {
    return {
        ...options,
        method,
    };
}

function body(data, options = {}) {
    return {
        ...options,
        body: JSON.stringify(data),
    };
}

function mimeType(mimeType, options = {}) {
    const headers = options.headers ?? new Headers();
    headers.append('Content-Type', mimeType);
    return {
        ...options,
        headers,
    };
}

export default getAll;
