import { connexion } from "../../action/action";

const url = "http://localhost:8000";

export function getAll(recherche){
    return fetch("https://nominatim.openstreetmap.org/search?q="+recherche+"&format=json").then(response => response.json())
}

export function getAllAd(){
    return fetch(url + "/api/adresses").then(response => response.json())
}

export function getAvis(id){
    return fetch(url + "/api/avis/" + id).then(response => response.json())
}

/********************************************************************************************************************************
 *********************************************************USER*****************************************************************
 ********************************************************************************************************************************/

export function getUser(id){
    return fetch(url + id, Options(localStorage.getItem("jwt"))).then(response => {
        return response.json()
    })
        .catch((err) => console.error(err));
}

export function updateUser(id, updates) {
    return fetch(url + id, {
        method: 'PUT',
        body: JSON.stringify(updates),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: 'Bearer ' + localStorage.getItem("jwt"),
        }
    }).then(response => response.json())
}

export function loginFetch(body, dispatch){
    var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    if (body.username !== undefined) {
        var raw = JSON.stringify({"username":body.username,"password":body.password});
    } else {
        var raw = JSON.stringify({"refreshToken":localStorage.getItem("refreshToken")});
    }
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch("http://localhost:8000/api/login_check", requestOptions)
    .then(response => {
        return response.json();
    })
    .then(data => {
        dispatch(connexion(data.token));
        localStorage.setItem("jwt",data.token)
    })
}

/********************************************************************************************************************************
 *********************************************************VOITURE*****************************************************************
 ********************************************************************************************************************************/

export function updateVoiture(id, voiture){
    console.log(voiture);
    return fetch(url + id, {
        method: 'PUT',
        body: JSON.stringify(voiture),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: 'Bearer ' + localStorage.getItem("jwt"),
        }
    }).then(response => response.json())
}

/********************************************************************************************************************************
*********************************************************TRAJETS*****************************************************************
********************************************************************************************************************************/

export function updateTrajet(trajet) {
    const options = method('PUT', body(trajet, mimeType('application/json')));
    return fetch(url + '/api/trajets/' + trajet.id, options).then((response) => response.json());
}

export function getMesTrajets() {
    return fetch(url + "/api/mesTrajets", Options()).then((response) => response.json());
}

export function appendTrajet(trajet) {
    return fetch(url + "/api/trajets", getPostOptions(trajet)).then((response) => response.json());
}

export function cancelTrajet(trajetID) {
    return fetch(url + "/api/trajets/" + trajetID, getDelOptions());
}

export function acceptReservation(demande) {
    return fetch(url + '/api/reservers/' + demande.id, getPutOptions(demande)).then((response) => response.json());
}
export function refuseReservation(IDreservation) {
    return fetch(url + '/api/reservers/' + IDreservation, getDelOptions());
}
export function reserverTrajet(reservation) {
    return fetch(url + '/api/reservers', getPostOptions(reservation)).then(response => response.json());
}

/********************************************************************************************************************************
*********************************************************MESSAGE*****************************************************************
********************************************************************************************************************************/

export function getAllMessages(utilisateur1, utilisateur2) {
    return fetch(url + "/api/conversation", getPostOptions({
        utilisateur1,
        utilisateur2
    })).then(response => {
        console.log('response', response);
        return response.json();
    })
}

export function appendMessage(message) {
    return fetch(url + "/api/messages", getPostOptions(message)).then((response) => response.json());
}

/********************************************************************************************************************************
*********************************************************GLOBAL*****************************************************************
********************************************************************************************************************************/

export function getInfo(fin){
    return fetch(url + fin, Options())
    .then(response => response.json())
}

/********************************************************************************************************************************
*********************************************************AUTRE*******************************************************************
********************************************************************************************************************************/

function Options() {
    return {
        method: 'GET',
        headers: new Headers({
            Authorization: 'Bearer ' + localStorage.getItem("jwt"),
        }),
    };
}

function getPostOptions(b) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", 'Bearer ' + localStorage.getItem("jwt"));

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(b),
        redirect: 'follow'
    };
    return requestOptions;
}

function getPutOptions(b) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", 'Bearer ' + localStorage.getItem("jwt"));

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: JSON.stringify(b),
        redirect: 'follow'
    };
    return requestOptions;
}

function getDelOptions() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", 'Bearer ' + localStorage.getItem("jwt"));

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders
    };
    return requestOptions;
}

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

function mimeType(mimeType, jwt, options = {}) {
    const headers = options.headers ?? new Headers();
    headers.append('Content-Type', mimeType);
    headers.append("Authorization: 'Bearer '"+ jwt)
    return {
        ...options,
        headers,
    };
}

export default getAll;
