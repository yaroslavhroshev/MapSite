import './Card.scss';
import PropTypes from 'prop-types';

const Card = ({ name, mark, imageUrl, price, geocode }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={imageUrl} alt={name} />
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
};

Card.defaultProps = {
  name: '',
  mark: '',
  imageUrl: '',
  price: 0,
  geocode: [],
};

export default Card;
