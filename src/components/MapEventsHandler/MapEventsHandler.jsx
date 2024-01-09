import { useMapEvents } from 'react-leaflet';
import PropTypes from 'prop-types';

const MapEventsHandler = ({ handleClick }) => {
  useMapEvents({
    click: (e) => handleClick(e.latlng),
  });
  return null;
};

MapEventsHandler.propTypes = {
  handleClick: PropTypes.func,
};

MapEventsHandler.defaultProps = {
  handleClick: () => {},
};
export default MapEventsHandler;
