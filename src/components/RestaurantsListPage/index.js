import { connect } from 'react-redux';
import RestaurantsListPage from './RestaurantsListPage';
import { loadRestaurants } from '../../store/actions';
import {
  selectRestaurantsList,
  selectRestaurantsListError,
  selectLoading,
} from '../../store/selectors';

const mapStateToProps = (state) => ({
  restaurantsData: selectRestaurantsList(state),
  error: selectRestaurantsListError(state),
  isLoading: selectLoading(state),
});

const mapDispatchToProps = {
  loadRestaurants,
};

const Enchanced = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestaurantsListPage);

export { Enchanced as RestaurantsListPage };
