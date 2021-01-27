const url = "http://localhost:8000/api";

export function getAll(recherche){
    return fetch("https://nominatim.openstreetmap.org/search/"+recherche+"?format=json").then(response => response.json())
}

export function getAllAd(){
    return fetch(url + "/adresses").then(response => response.json())
}

export function getAvis(id){
    return fetch(url + "/avis/" + id).then(response => response.json())
}

export function getInfoCar(id){
    return fetch(url + "/voitures/" + id).then(response => response.json())
}

export function getAllUser(){
    return fetch(url + "/utilisateurs").then(response => response.json())
}

export function getUser(id){
    return fetch(url + "/utilisateurs/" + id).then(response => response.json())
}

export function getAllTrajet(){
    return fetch(url + "/trajets").then(response => response.json())
}

export function getTrajet(id){
    return fetch(url + "/trajets/" + id).then(response => response.json())
}

export function getAllMessages(id){
    return fetch(url + "/messages/" + id).then(response => response.json())
}

export default getAll;
