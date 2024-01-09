import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import './CardContainer.scss';

const CardContainer = () => {
  const markers = useSelector((state) => state?.markers?.markers);
  return (
    <div className="container">
      {markers.map(({ geocode, name, mark, imageUrl, price }) => (
        <Card
          key={geocode}
          name={name}
          mark={mark}
          imageUrl={imageUrl}
          price={price}
          geocode={geocode}
        />
      ))}
    </div>
  );
};

export default CardContainer;
