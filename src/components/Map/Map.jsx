import { useRef } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon, DivIcon, point } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import './Map.scss';
import { useSelector, useDispatch } from 'react-redux';
import MapEventsHandler from '../MapEventsHandler/MapEventsHandler';
import {
  initActiveMarker,
  addNewGeocode,
} from '../../redux/slices/markersSlice';

const Map = () => {
  const mapRef = useRef(null);
  const markers = useSelector((state) => state?.markers?.markers);
  const dispatch = useDispatch();
  const newGeocodeIsActive = useSelector(
    (state) => state?.markers?.newGeocodeIsActive,
  );
  const handleClick = (e) => {
    if (newGeocodeIsActive) {
      console.log(e);
      dispatch(addNewGeocode([e.lat, e.lng]));
    }
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
      center={[50.451437934305005, 30.52302501859049]}
      zoom={6}
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
            eventHandlers={{
              click: () => {
                dispatch(initActiveMarker(marker));
              },
            }}
          />
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default Map;
