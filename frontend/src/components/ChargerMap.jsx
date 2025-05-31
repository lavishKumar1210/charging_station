import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import API from '../services/api';
import 'leaflet/dist/leaflet.css';

const ChargerMap = () => {
  const [chargers, setChargers] = useState([]);

  useEffect(() => {
    API.get('/chargers').then(res => setChargers(res.data));
  }, []);

  return (
    <MapContainer center={[28.61, 77.23]} zoom={5} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {chargers.map(charger => (
        <Marker key={charger._id} position={[charger.location.latitude, charger.location.longitude]}>
          <Popup>
            <b>{charger.name}</b><br />
            Status: {charger.status}<br />
            Power: {charger.powerOutput}kW<br />
            Connector: {charger.connectorType}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default ChargerMap;
