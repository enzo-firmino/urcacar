import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import React from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import iconGreen from '../../assets/GreenMarker.png'

function Test(){
    const position = [49.24167849096564, 4.061995752829034] //Position du centre de la map
    var greenIcon = L.icon({
        iconUrl: iconGreen,
        iconSize:     [31, 47], // size of the icon
        iconAnchor:   [15, 47], // point of the icon which will correspond to marker's location
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    const mode = 'driving'; // 'walking';
    const origin = 'coords or address';
    const destination = 'coords or address';
    const APIKEY = 'XXXXXXXXXXXX';
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${APIKEY}&mode=${mode}`;

    fetch(url)
        .then(response => response.json())
        .then(responseJson => {
            if (responseJson.routes.length) {
                this.setState({
                    coords: this.decode(responseJson.routes[0].overview_polyline.points) // definition below
                });
            }
        }).catch(e => {console.warn(e)});

    return (
      <MapContainer style={{height:500, width:1000}} center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={greenIcon}>
          <Popup>
            Départ
          </Popup>
        </Marker>

        <MapView.Polyline
          coordinates={[
              {latitude: initial.latitude, longitude: initial.longitude}, // optional
              ...this.state.coords,
              {latitude: final.latitude, longitude: final.longitude}, // optional
          ]}
          strokeWidth={4}
      />

      </MapContainer>
    )
}

export default Test;
