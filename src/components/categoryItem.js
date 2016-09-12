import React from 'react';
import {EDIT_STATE, VIEW_STATE} from '../constants/common.js';
import _ from 'underscore';
import ContentEditable from 'react-contenteditable';
import { browserHistory } from 'react-router';
export default class CategoryItem extends React.Component {
	/**
   *
   */
  constructor() {
    super();
    this.state = {
      saveButtonEnabled: false
    };
  }
	/**
   *
   */
  componentDidMount() {
    if (this.props.state === EDIT_STATE) {
      this.refs.contentEditable.innerHTML = this.props.name;
      this.setState({
        currentValue: this.props.name,
        saveButtonEnabled: false
      });
    }
  }
  /**
   *
   */
  removeItem() {
    this.props.removeCategory(this.props.name);
  }
  /**
   * in edit mode this method check if changes is exist
   * if changes exist will be show 'Save' button
   * @param e
   */
  checkChanges(e) {
    const currentValue = e.target.innerHTML;
    this.setState({
      currentValue,
      saveButtonEnabled: this.props.name !== currentValue
    });
  }
  /**
   * returns save button if changes is exist
   * @return {XML}
   */
  getSaveButton() {
    if (this.state.saveButtonEnabled) {
      return <button className="md-button" onClick={this.saveChangesInItem.bind(this)}>Save</button>;
    }
  }
  /**
   * triggers edit action and changes store
   */
  saveChangesInItem() {
    if (_.isEmpty(this.state.currentValue)) {
      alert('New value cant be empty');
    } else {
      this.props.editCategory(this.state.currentValue, this.props.name);
    }
  }
  /**
   *
   */
  goToLocationCategory() {
    browserHistory.push(`/locations/view/${this.props.name}`);
  }
  /**
   * returns content according
   */
  getCategoryContent() {
    let toReturn;

    switch(this.props.state) {

      case EDIT_STATE:

        toReturn = (<div className="md-category-item_edit_mode">
          <div contentEditable="true" onKeyUp={this.checkChanges.bind(this)} ref="contentEditable" className="md-category-item__label md-category-item__label_edited"></div>
          <div className="md-category-item__edit-buttons-container">
            <button className="md-button" onClick={this.removeItem.bind(this)}>Remove</button>
            {this.getSaveButton()}
          </div>
        </div>);
                  break;

      default:

        toReturn = (<div onClick={this.goToLocationCategory.bind(this)} className="md-category-item__label">{this.props.name}</div>);

    }
    return toReturn;
  }
  /**
   *
   */
  render() {
    return <div className="md-category-item">
      {this.getCategoryContent()}
    </div>;
  }
}
