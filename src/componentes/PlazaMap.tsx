import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Plaza {
  id: string;
  nombre: string;
  coordenadas: {
    lat: number;
    lng: number;
  };
  imagen: string;
}

const plazas: Plaza[] = [
  {
    id: 'italia',
    nombre: 'Plaza Italia',
    coordenadas: {
      lat: -32.889461,
      lng: -68.844794
    },
    imagen: '../../public/plaza_italia.jpg'
  },
  {
    id: 'españa',
    nombre: 'Plaza España',
    coordenadas: {
      lat: -32.890720,
      lng: -68.843957
    },
    imagen: '../../public/plaza_españa.jpg'
  },
  // Puedes agregar más plazas aquí
];

const customIcon = new Icon({
  iconUrl: '/marker-icon.svg',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

function PlazaMap() {
  const [selectedPlaza] = useState<Plaza>(plazas[0]);

  return (
    <MapContainer 
      center={selectedPlaza.coordenadas} 
      zoom={16} 
      style={{ height: '100vh', width: '100%' }}
      zoomControl={true}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={selectedPlaza.coordenadas} icon={customIcon}>
        <Popup>
          {selectedPlaza.nombre}
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default PlazaMap;
