function getAll(recherche){
    return fetch("https://nominatim.openstreetmap.org/search/"+recherche+"?format=json").then(response => response.json())
}



export default getAll;
