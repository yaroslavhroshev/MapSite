import { useSelector } from 'react-redux';
import './Card.scss';

const Card = () => {
  const markers = useSelector((state) => state.markers.markers);
  return (
    <div className="card">
      <div className="card-image" />
      <div className="card-content-wrapper">
        <div className="card-title">
          <p className="title">Name</p>
          <p className="mark">Mark</p>
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
          <p>Ціна $</p>
          <div>
            <div />
            <p>Геолокація</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
