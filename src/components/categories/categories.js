import React from 'react';
import './categories.scss';
import CategoryItem from '../categoryItem.js';
import _ from 'underscore';

export default class Categories extends React.Component {
	/**
   *
   */
  getCategories() {
    if (_.isEmpty(this.props.categories)) {
      return <div className="md-categories__warning">Categories is empty!!! Go ahead and add new category.</div>
    } else  {
      return this.props.categories.map((category) => {
        return <CategoryItem editCategory={this.props.editCategory} removeCategory={this.props.removeCategory} state={this.props.state} key={category.name} name={category.name}></CategoryItem>;
      });
    }
  }
	/**
   *
   * @return {XML}
   */
  render() {
    return <div className="md-categories">
      {this.getCategories()}
    </div>;
  }
}
