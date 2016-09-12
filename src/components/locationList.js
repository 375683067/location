import React from 'react';
import _ from 'underscore';
import {EDIT_STATE} from '../constants/common';

export default class LocationList extends React.Component {
  /**
   * @param id
   */
  onEdit(id) {
    this.props.onEdit(id);
  }
	/**
   *
   */
  removeItem(id) {
    this.props.onEditEnd();
    this.props.removeLocation(id);
  }
  /**
   *
   */
  handleSelection(id) {
    if (this.props.mode !== EDIT_STATE) {
      this.props.onSelect && this.props.onSelect(id);
    }
  }
  /**
   *
   */
  getEditButtons(id) {
    if (this.props.mode === EDIT_STATE) {
      return <div className="md-list-item__button-container">
        <button onClick={this.removeItem.bind(this, id)} className="md-button">remove</button>
        <button onClick={this.onEdit.bind(this, id)} className="md-button">edit</button>
      </div>;
    }
  }
  /**
   *
   */
  createList() {
    return this.props.locations.map((location) => {
      return <div className="md-list-item" onClick={this.handleSelection.bind(this, location.id)} key={location.id}>
        <div className="md-list-item__line">
          <span className="md-list-item__title">name: </span>
          <span>{location.name}</span>
        </div>
        <div className="md-list-item__line">
          <span className="md-list-item__title">address:</span>
          <span>{location.address}</span>
        </div>
        <div className="md-list-item__line">
          <span className="md-list-item__title">coordinates:</span>
          <span>{location.coordinates}</span>
        </div>
        <div className="md-list-item__line">
          <span className="md-list-item__title">Categories:</span>
          <span>{location.locationCategories.join('; ')}</span>
        </div>
        {this.getEditButtons(location.id)}
      </div>
    });
  }
  /**
   * @return {*}
   */
  getLocationList() {
    let toReturn;
    if (_.isEmpty(this.props.locations)) {
      toReturn = <div>Location list is empty! Go to edit and add it!!!!</div>;
    } else {
      toReturn = this.createList();
    }
    return toReturn;
  }
	/**
   *
   * @return {XML}
   */
  render () {
    return <div className="md-location-list md-block">
      {this.getLocationList()}
    </div>;
  }
}

