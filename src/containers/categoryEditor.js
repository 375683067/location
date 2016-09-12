import {connect} from 'react-redux';
import CategoryEditor from '../components/categoryEditor/categoryEditor.js';
import {addCategory, removeCategory, editCategory} from '../actions/categoriesActions.js';
import {sort} from '../constants/helpers.js';
/**
 * @param state
 * @return {{categories}}
 */
function mapStateToProps (state) {
  return {
    categories: sort(state.categories, 'name')
  }
}
/**
 *
 * @param dispatch
 * @return {{addNewCategory: (function(*=)), editCategory: (function(*=)), removeCategory: (function(*=))}}
 */
function mapDispatchToProps (dispatch) {
  return {
    addNewCategory(name) {
      dispatch(addCategory(name));
    },
    editCategory(name, prevName) {
      dispatch(editCategory(name, prevName))
    },
    removeCategory(name) {
      dispatch(removeCategory(name));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryEditor);
