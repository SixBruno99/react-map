import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import SearchBox from './searchBox';

const icon = L.icon({
  iconUrl: './placeholder.png',
  iconSize: [36, 36]
})



function Map() {
  const brasiliaLatLong = [-15.7801, -47.9292];
  return (
    <div>
      <h1 style={{ margin: '0', textAlign: "center", height: "64px" }}>Mapa do OpenStreetMap no React</h1>
      {/* <div style={{ display: 'flex', alignItems: 'center', margin: 'auto', height: "64px",  width: '50%' }}>
        <input style={{ width: '100%' }}/>
      </div> */}
      <SearchBox />


      <MapContainer
        center={brasiliaLatLong}
        zoom={3}
        style={{ height: 'calc(100vh - 128px)', width: '100%' }}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=GOk7H42pjxo95MfbMumr"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={brasiliaLatLong}>
          <Popup>
            Brasília, a capital do Brasil.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
