import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import './CardContainer.scss';

const CardContainer = () => {
  const activeMarker = useSelector((state) => state?.markers?.activeMarker);
  const markers = useSelector((state) => state?.markers?.markers);
  return (
    <div className="container">
      {Object.keys(activeMarker).length === 0 ? (
        markers.map(({ geocode, name, mark, imageUrl, price }) => (
          <Card
            key={geocode}
            name={name}
            mark={mark}
            imageUrl={imageUrl}
            price={price}
            geocode={geocode}
          />
        ))
      ) : (
        <Card
          key={activeMarker.geocode}
          name={activeMarker.name}
          mark={activeMarker.mark}
          imageUrl={activeMarker.imageUrl}
          price={activeMarker.price}
          geocode={activeMarker.geocode}
          activeCard
        />
      )}
    </div>
  );
};

export default CardContainer;
