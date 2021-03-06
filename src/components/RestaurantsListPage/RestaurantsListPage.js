import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RestaurantsListPage.scss';

import { Loader } from '../Loader';
import { Error } from '../Error';
import { RestaurantCard } from '../RestaurantCard';

const DEFAULT_ETA_RANGE = '20 - 30 min';

class RestaurantsListPage extends Component {
  componentDidMount() {
    const { loadRestaurants } = this.props;

    loadRestaurants();
  }

  render() {
    const { restaurantsData, isLoading, error } = this.props;

    if (isLoading) {
      return <Loader />;
    }

    if (error) {
      // eslint-disable-next-line no-console
      return <Error message={console.log(error)} />;
    }

    return (
      <div className="restaurants-list">
        {restaurantsData.map((restaurant) => {
          const {
            uuid,
            title,
            heroImageUrl,
            categories,
            etaRange,
          } = restaurant;

          return (
            <RestaurantCard
              key={uuid}
              uuid={uuid}
              title={title}
              imageUrl={heroImageUrl}
              categories={categories}
              etaRange={etaRange ? etaRange.text : DEFAULT_ETA_RANGE}
            />
          );
        })}
      </div>
    );
  }
}

export default RestaurantsListPage;

RestaurantsListPage.propTypes = {
  restaurantsData: PropTypes.arrayOf(PropTypes.shape({})),
  loadRestaurants: PropTypes.func.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

RestaurantsListPage.defaultProps = {
  restaurantsData: [],
  error: null,
  isLoading: false,
};
