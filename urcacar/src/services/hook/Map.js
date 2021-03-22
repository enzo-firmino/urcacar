import {useEffect, useState} from "react";
import getAll from "../fetch/fetch";


function useMap(rue1, rue2) {
    const [coor1, setCoor1] = useState(null);
    const [coor2, setCoor2] = useState(null);
    let [refMap, setRefMap] = useState(null);
    const saveMap = (map) => {
        setRefMap(map)
    }

    let wayPoints = [coor1,coor2];

    useEffect(() => {
        getAll(rue2.split(' ').join('+')).then(function (data) {
            setCoor2([parseFloat(data[0].lat), parseFloat(data[0].lon)])
        });
        getAll(rue1.split(' ').join('+')).then(function (data) {
            setCoor1([parseFloat(data[0].lat), parseFloat(data[0].lon)])
        });
    }, [])

    // function setWaypoint(recherche1, recherche2) {
    //     //setWayPoints([i1, i2]);

    //     getAll(recherche1).then(function (data) {
    //         coord = [parseFloat(data[0].lat), parseFloat(data[0].lon)]
    //     });
    //     getAll(recherche2).then(function (data) {
    //         setWayPoints([coord, [parseFloat(data[0].lat), parseFloat(data[0].lon)]])
    //     });
    // }

    return [refMap, wayPoints, saveMap]
}

export default useMap;