import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import React from 'react';
import L, { Routing } from 'leaflet';
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

    /*
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
      </MapContainer>
    */
    return (
      <html lang="fr">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Document</title>
      
              <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin=""/>
              <link rel="stylesheet" href="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.css" />
              <link rel="stylesheet" href="https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.css" />
              <link rel="stylesheet" href="css/styles.css">
          </head>
      
          <style>
              #carte{
                  height: 80vh;
              }
          </style>
      
          <script>
              window.onload = function(){
                  let macarte = L.map('carte').setView([48.852969, 2.349903], 13)
                  L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                      attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
                      minZoom: 1,
                      maxZoom: 20
                  }).addTo(macarte)
                  L.Routing.control({
                      lineOptions: {
                          styles: [{color: '#ff8f00', opacity: 1, weight: 7}]
                      },
                      router: new L.Routing.osrmv1({
                          language: 'fr',
                          profile: 'car', // car, bike, foot
                      }),
                      geocoder: L.Control.Geocoder.nominatim()
                  }).addTo(macarte)
                  
              }
          </script>
      
          <body>
              <div id="carte"></div>
      
              <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js" integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew==" crossorigin=""></script>
              <script src="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.js"></script>
              <script src="https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.js"></script>
              <script src="js/scripts.js"></script>
          </body>
      </html>
    )
}

export default Test;

