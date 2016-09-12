import {connect} from 'react-redux';
import CategoriesList from '../components/categories/categories.js';
import {sort} from '../constants/helpers.js';

function mapStateToProps (state) {
  return {
    categories: sort(state.categories, 'name')
  };
}

function mapDispatchToProps () {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesList);
