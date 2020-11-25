import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import React from 'react';
import {View, Text} from 'react-native';

function Footer() {
    var map = L.map('map', {
        center: [51.505, -0.09],
        zoom: 13
    });

    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
}