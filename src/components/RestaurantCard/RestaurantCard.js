import React from 'react';
import PropTypes from 'prop-types';
import './RestaurantCard.scss';

export const RestaurantCard = (props) => {
  const {
    title,
    imageUrl,
    categories,
    etaRange,
    // uuid,
  } = props;

  return (
    <div className="restaurant-card">
      <img src={imageUrl} alt={title} className="restaurant-card__img" />
      <h2 className="restaurant-card__title">{title}</h2>
      <div className="restaurant-card__categories">
        {categories.join(' - ')}
      </div>
      <div className="restaurant-card__eta">
        {etaRange}
      </div>
    </div>
  );
};

export default RestaurantCard;

RestaurantCard.propTypes = {
  // uuid: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  etaRange: PropTypes.string,
};

RestaurantCard.defaultProps = {
  categories: [],
  etaRange: '',
};
