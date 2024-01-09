import React from 'react';
import { useMapEvents } from 'react-leaflet';

const MapEventsHandler = ({ handleClick }) => {
  useMapEvents({
    click: (e) => handleClick(e.latlng),
  });
  return null;
};
export default MapEventsHandler;
