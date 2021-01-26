const url = "http://localhost:8000/api";

export function getAll(recherche){
    return fetch("https://nominatim.openstreetmap.org/search/"+recherche+"?format=json").then(response => response.json())
}

export function getAllAd(){
    return fetch(url + "/api/adresses").then(response => response.json())
}

export function getAllAvis(id){
    return fetch(url + "/api/avis/" + id).then(response => response.json())
}

export function getInfoCar(id){
    return fetch(url + "/api/voitures/" + id).then(response => response.json())
}

export function getAllUser(){
    return fetch(url + "/api/utilisateurs").then(response => response.json())
}

export function getUser(id){
    return fetch(url + "/api/utilisateurs/" + id).then(response => response.json())
}

export function getTrajet(){
    return fetch(url + "/api/trajets").then(response => response.json())
}

export function getAllTrajet(id){
    return fetch(url + "/api/trajets/" + id).then(response => response.json())
}

export function getAllMessages(id){
    return fetch(url + "/api/messages/" + id).then(response => response.json())
}

export default getAll;