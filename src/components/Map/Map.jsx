import { useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon, DivIcon, point, map } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import './Map.scss';
import { useSelector } from 'react-redux';
import MapEventsHandler from '../MapEventsHandler/MapEventsHandler';

const Map = () => {
  const mapRef = useRef(null);
  const markers = useSelector((state) => state?.markers?.markers);

  const handleClick = (e) => {
    console.log(e);
  };
  const markerIcon = '../src/assets/icon.png';
  const customIcon = new Icon({
    iconUrl: markerIcon,
    iconSize: [25, 25],
  });

  const createCustomClusterIcon = (cluster) => {
    return new DivIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: 'custom-marker-cluster',
      iconSize: point(33, 33, true),
    });
  };
  return (
    <MapContainer
      center={[50.254444, 28.657778]}
      zoom={13}
      onClick={handleClick}
      ref={mapRef}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MapEventsHandler handleClick={handleClick} />
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createCustomClusterIcon}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.geocode}
            position={marker.geocode}
            icon={customIcon}
          >
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default Map;
