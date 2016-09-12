import React from 'react';
import {EDIT_STATE} from '../constants/common.js';
import {LocationEditor} from '../containers/locationContainer.js';
import _ from 'underscore';

export default class locationEditor extends React.Component {
	/**
   *
   */
  constructor() {
    super();
    this.state = {
      id: null,
      address: '',
      name: '',
      coordinates: '',
      locationCategories: []
    };
  }
  /**
   *
   */
  componentWillReceiveProps(props) {
    switch (props.mode) {
      case EDIT_STATE:
        const editedElement = _.findWhere(props.locations, {id: props.editedElementId});
        this.setState(editedElement);
            break;
        default:
          this.setState({
            id: null,
            address: '',
            name: '',
            coordinates: '',
            locationCategories: []
          });
            break;
    }
  }
  /**
   * @param e
   */
  save(e) {

    e.preventDefault();

    const location = {
      name: this.state.name,
      id: _.isNumber(this.state.id) ? this.state.id : new Date().valueOf(),
      address: this.state.address,
      coordinates: this.state.coordinates,
      locationCategories: this.state.locationCategories
    };

    if (this.props.mode == EDIT_STATE) {
      this.props.editLocation(location.id, location);
    } else {
      this.props.addLocation(location);
    }
    this.props.onEditEnd();
  }
	/**
   *
   * @return {*}
   */
  getButton() {
    let toReturn;
    switch (this.props.mode) {

      case EDIT_STATE:
        toReturn = <span>
          <button className="md-button">Save</button>
          <button onClick={this.props.onEditEnd} className="md-button">Cancel</button>
        </span>;
            break;

      default:
        toReturn = <button className="md-button">Add new item</button>;
            break;
    }
    return toReturn;
  }
  /**
   *
   */
  getCategories() {
    return this.props.categories.map((category)=> {
      const checked = this.state.locationCategories.indexOf(category.name) !== -1;
      return <lable key={category.name}>
        <input type="checkbox"
               checked={checked}
               onChange={this.onActiveCategoryChanged.bind(this)}
               value={category.name}
               name="locationCategories" />
        {category.name}
      </lable>
    });
  }

  /**
   *
   * @param event
   */
  onActiveCategoryChanged(event) {
    const categories = this.state.locationCategories.slice();

    if(event.target.checked) {
      categories.push(event.target.value);
    } else {
      const index = this.state.locationCategories.indexOf(event.target.value);

      categories.splice(index, 1);
    }
    this.setState({
        locationCategories: categories
    });
  }
  /**
   * @param event
   */
  onAddressChanged(event) {
    this.setState({address: event.target.value});
  }

  /**
   *
   * @param event
   */
  onNameChanged(event) {
    this.setState({name: event.target.value});
  }

  /**
   *
   * @param event
   */
  onCoordinatesChanges(event) {
    this.setState({coordinates: event.target.value});
  }
	/**
   *
   */
  render() {
    return <div className="md-location-editor md-block">
      <form onSubmit={this.save.bind(this)}>

        <div className="md-location-editor__line">
          <label className="md-location-editor__label">
            Name:
          </label>
          <input className="md-location-editor__input" type="text" value={this.state.name} onChange={this.onNameChanged.bind(this)} placeholder="input name" required />
        </div>

        <div className="md-location-editor__line">
          <label  className="md-location-editor__label">
            Address:
          </label>
          <input className="md-location-editor__input" type="text" value={this.state.address} onChange={this.onAddressChanged.bind(this)} placeholder="input address" required />
        </div>
        <div className="md-location-editor__line">
          <label className="md-location-editor__label">
            Coordinates:
          </label>
          <input className="md-location-editor__input" type="text" value={this.state.coordinates} pattern="^(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)$" onChange={this.onCoordinatesChanges.bind(this)} placeholder="47.1231231,179.99999999" required />
        </div>
        <div className="md-location-editor__line">
          <label  className="md-location-editor__label">
            Categories:
          </label>
          <span className="md-location-editor__input">
            {this.getCategories()};
          </span>
        </div>
        <div className="md-location-editor__buttons-container">
          {this.getButton()}
        </div>
      </form>
    </div>
  }
}
