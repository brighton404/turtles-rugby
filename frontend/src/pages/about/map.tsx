import { useEffect } from 'react';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  useEffect(() => {
    const map = L.map('map').setView([-3.2453058, 40.1240178], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([-3.2453058, 40.1240178]).addTo(map)
      .bindPopup('Town Secondary School')
      .openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      id="map"
      style={{ height: '400px', width: '100%' }}
    ></div>
  );
};

export default MapComponent;
