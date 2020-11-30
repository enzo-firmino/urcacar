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

    function setWaypoint(i1, i2) {
        //setWayPoints([i1, i2]);
        setWayPoints(
            getAll("IUT Reims").then(function (data) {
                return [data[0].lat, data[0].lon];

            }))

    }

    return [refMap, wayPoints, saveMap, setWaypoint]
}

export default useMap;