import { connexion } from "../../action/action";

const url = "http://localhost:8000";

export function getAll(recherche){
    console.log("https://nominatim.openstreetmap.org/search?q="+recherche+"&format=json")
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
        console.log(data);
        dispatch(connexion(data.token));
        localStorage.setItem("jwt",data.token)
    })
}

function Options(jwt) {
    return {
        method: 'GET',
        headers: new Headers({
            Authorization: 'Bearer ' + jwt,
        }),
    };
}

export function getAllTrajet(){
    return fetch(url + "/api/trajets", Options(localStorage.getItem("jwt"))).then(response => response.json())
}

export function appendTrajet(trajet) {
    return fetch(url + "/api/trajets/", getOptions(trajet)).then((response) => response.json());
}

export function appendAdresse(ad) {
    //const options = method('POST', body(trajet, localStorage.getItem("jwt"), mimeType('application/json')));

    return fetch(url + "/api/trajets/", getOptions(ad)).then((response) => response.json());
}

function getOptions(b) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", 'Bearer ' + localStorage.getItem("jwt"));

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: b,
        redirect: 'follow'
    };
    return requestOptions;
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
    return fetch(url + "/api/messages/" + id).then(response => response.json())
}

/********************************************************************************************************************************
*********************************************************GLOBAL*****************************************************************
********************************************************************************************************************************/

export function getInfo(fin){
    return fetch(url + fin, Options(localStorage.getItem("jwt")))
    .then(response => response.json())
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
