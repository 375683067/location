import React from 'react';
import _ from 'underscore';
import Categories from '../../containers/categoriesContainer';
import {EDIT_STATE} from '../../constants/common.js';
import './categoryEditor.scss';

export default class CategoryEditor extends React.Component {
  /**
   * creates new category
   */
  addNewCategory() {
    let newCategoryName = this.refs.newCategoryNameInput.value;
    if (_.isEmpty(newCategoryName)) {
      alert('categoryNameShouldBe empty');//todo crate error handler
    } else {
      this.props.addNewCategory(newCategoryName);
    }
    this.refs.newCategoryNameInput.value = '';
  }
  /**
   * @return {XML}
   */
  render() {
    return <div className="md-category-editor">
      <div className="md-category-editor__add-new-category">
        <input ref="newCategoryNameInput" className="md-text-input md-category-item__label" type="text" name="newCategory" placeholder="enter name of new category"/>
        <button className="md-button" onClick={this.addNewCategory.bind(this)}>
          add new item
        </button>
        <div className="md-category-editor__existed-categories">
          <Categories editCategory={this.props.editCategory} removeCategory={this.props.removeCategory} state={EDIT_STATE}/>
        </div>
      </div>
    </div>;
  }
}
