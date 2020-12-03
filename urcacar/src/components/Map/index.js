import React from 'react';
import Routing from "../Routing";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import L from 'leaflet';
import useMap from "../../services/hook/Map"
import iconGreen from '../../assets/GreenMarker.png';

export default function MapView(props){
    const dataPoints = [
        [ 49.467134581917357,4.546518086577947],
        [ 49.295014379864874,4.898610599532319],

    ]

    var greenIcon = L.icon({
        iconUrl: iconGreen,
        iconSize:     [31, 47], // size of the icon
        iconAnchor:   [15, 47], // point of the icon which will correspond to marker's location
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    const[refMap, wayPoints, saveMap, setWaypoint] = useMap();

    return(
        <div className="mapHolder">

            <input id="rue1" placeholder="Adresse1"type = "text"/>
            <input id="rue2" placeholder="Adresse2"type = "text"/>

            <button onClick ={()=>{
                setWaypoint(document.getElementById("rue1").value, document.getElementById("rue2").value)
            }}>
                Change
            </button>

            <Map style={{height: props.size}} center={[49.24167849096564, 4.061995752829034]} zoom={11} ref={saveMap}>
                <TileLayer
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                { dataPoints.map((data , index)=>{
                    return(
                        <Marker icon={greenIcon} key={index} position={data}>
                            <Popup>
                                Sample Popup
                            </Popup>
                        </Marker>
                    )
                })}

                {console.log(wayPoints)}

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