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
}

interface PlazaMapProps {
  selectedPlaza: Plaza;
}

const customIcon = new Icon({
  iconUrl: '/plaza-marker.svg',
  iconSize: [24, 32],
  iconAnchor: [12, 32],
  popupAnchor: [0, -32],
});

function PlazaMap({ selectedPlaza }: PlazaMapProps) {
  return (
    <MapContainer 
      key={`${selectedPlaza.coordenadas.lat}-${selectedPlaza.coordenadas.lng}`}
      center={selectedPlaza.coordenadas} 
      zoom={16} 
      style={{ height: '100%', width: '100%' }}
      zoomControl={false}
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
