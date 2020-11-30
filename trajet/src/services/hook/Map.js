import {useEffect, useState} from "react";
import getAll from "../fetch/fetch";


function useMap(rue1, rue2) {

    useEffect(() => {
        getAll().then(function (data) {
            console.log(data[0].lat);
        })

    }, [])
    const [wayPoints, setWayPoints] = useState(null);
    let [refMap, setRefMap] = useState(null);
    const saveMap = (map) => {
        setRefMap(map)

    }
    let coord = [];

    function setWaypoint(recherche1, recherche2) {
        //setWayPoints([i1, i2]);

        getAll(recherche1).then(function (data) {
            coord = [parseFloat(data[0].lat), parseFloat(data[0].lon)]
        });
        getAll(recherche2).then(function (data) {
            setWayPoints([coord, [parseFloat(data[0].lat), parseFloat(data[0].lon)]])
        });
    }

    return [refMap, wayPoints, saveMap, setWaypoint]
}

export default useMap;