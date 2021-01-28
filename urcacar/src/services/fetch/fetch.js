const url = "http://localhost:8000";

export function getAll(recherche){
    return fetch("https://nominatim.openstreetmap.org/search/"+recherche+"?format=json").then(response => response.json())
}

export function getAllAd(){
    return fetch(url + "/adresses").then(response => response.json())
}

export function getAllAvis(id){
    return fetch(url + "/avis/" + id).then(response => response.json())
}

export function getInfoCar(id){
    return fetch(url + "/voitures/" + id).then(response => response.json())
}

/********************************************************************************************************************************
*********************************************************TRAJETS*****************************************************************
********************************************************************************************************************************/

export function getAllTrajet(){
    return fetch(url + "/api/trajets").then(response => response.json())
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

export default getAll;