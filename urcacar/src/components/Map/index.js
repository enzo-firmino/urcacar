import React from 'react';
import Routing from "../Routing";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import L from 'leaflet';
import useMap from "../../services/hook/Map"
import iconGreen from '../../assets/GreenMarker.png';
import { useHistory } from 'react-router-dom';


//Pas terminé
export default function MapView(props){

    const history = useHistory();
    const {aD,aA} = props;

    const dataPoints = [
        [ 49.467134581917357,4.546518086577947],
        [ 49.295014379864874,4.898610599532319]
    ]

    var greenIcon = L.icon({
        iconUrl: iconGreen,
        iconSize:     [31, 47], // size of the icon
        iconAnchor:   [15, 47], // point of the icon which will correspond to marker's location
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    const[refMap, wayPoints, saveMap] = useMap(aD,aA);

    if(wayPoints[0] === null){
        return <div/>
    }

    return(
        <div className="mapHolder" style={{height:"100px"}}>


            <Map ref={saveMap}>
                <TileLayer
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                { wayPoints.map((data , index)=>{
                    if(index%2 == 0){
                        return(
                            <Marker icon={greenIcon} key={index} position={data}>
                                <Popup>
                                    {aD.split("+")[0]}
                                </Popup>
                            </Marker>
                        )
                    }else{
                        return(
                            <Marker icon={greenIcon} key={index} position={data}>
                                <Popup>
                                    {aA.split("+")[0]}
                                </Popup>
                            </Marker>
                        )
                    }
                })}

                <Routing
                    map={refMap}
                    show={true}
                    waypoints={wayPoints}
                    lineStyles={{
                        color: 'red',
                        opacity: 1,
                        weight: 5
                    }}
                />
            </Map>
        </div>
    )
}