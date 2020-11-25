import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import React from 'react';
import L from 'leaflet';
import iconGreen from '../../assets/GreenMarker.png'

function Test(){
    const position = [51.505, -0.09]
    var greenIcon = L.icon({
        iconUrl: iconGreen,
        iconSize:     [31, 47], // size of the icon
        iconAnchor:   [15, 47], // point of the icon which will correspond to marker's location
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    return (
      <MapContainer style={{height:1000}} center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={greenIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    )
}

export default Test;