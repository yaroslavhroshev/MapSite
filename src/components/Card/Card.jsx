import './Card.scss';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteActiveMarker } from '../../redux/slices/markersSlice';

const Card = ({ name, mark, imageUrl, price, geocode, activeCard }) => {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <div className="card-image">
        <img src={imageUrl} alt={name} />
        {activeCard ? (
          <button
            type="button"
            onClick={() => {
              dispatch(deleteActiveMarker());
            }}
            className="active-card-close-icon"
          />
        ) : null}
      </div>
      <div className="card-content-wrapper">
        <div className="card-title">
          <p className="title">{name}</p>
          <p className="mark">{mark}</p>
          <div>
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
        <div className="card-price">
          <p className="text-price">Вартість</p>
          <p className="price">{price} $</p>
          <div className="geo-code-wrapper">
            <div className="geo-icon" />
            <p className="geocode">
              {geocode.map((code) => (
                <span key={code}>{code}</span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  mark: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
  geocode: PropTypes.arrayOf(PropTypes.number),
  activeCard: PropTypes.bool,
};

Card.defaultProps = {
  name: '',
  mark: '',
  imageUrl: '',
  price: 0,
  geocode: [],
  activeCard: false,
};

export default Card;
