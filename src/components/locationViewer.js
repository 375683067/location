import React from 'React';
import LocationsList from './locationList.js';
import _ from 'underscore';
import {parseCoordinates, vibrate} from '../constants/helpers.js'

export default class LocationViewer extends React.Component {

  constructor() {
    super();
    this.state = {
      viewByCategories: false,
      showLocationOnMapId: null
    }
  }

  toggleViewByCategories() {
    this.setState({
      viewByCategories: !this.state.viewByCategories
    });
  }
  /**
   * @return {XML}
   */
  getControlButtons() {
    if (!_.isString(this.props.params.category)) {
      const title = this.state.viewByCategories ? 'ungroup' : 'group by category';
      return <div className="md-location-viewer__toggle-button-container">
        <button className="md-button" onClick={this.toggleViewByCategories.bind(this)}>{title}</button>
      </div>
    }
  }
  /**
   * normalize data to show categorized locations
   */
  mapByCategories() {
    const categoriesMap = {};

    this.props.locations.forEach((location) => {
      location.locationCategories.forEach((categoryName) => {
        if (!categoriesMap[categoryName]) {
          categoriesMap[categoryName] = [];
        }
        categoriesMap[categoryName].push(location);
      });
    });
    return categoriesMap;
  }

  /**
   * @param {string} [category] - name of show category. form url parameter
   */
  getCategorisedLocations(category) {
    let categoryMap = this.mapByCategories();
    if (_.isString(category)) {
      categoryMap = {
        [category]: categoryMap[category]
      }
    }
    return _.map(categoryMap, (locations, categoryName) => {
      return <div key={categoryName}>
        <div className="md-group-name-label">{categoryName}</div>
        <LocationsList  onSelect={this.locationSelected.bind(this)}  locations={locations}> </LocationsList>
      </div>;
    });
  }
  /**
   *
   */
  closeMap() {
    this.setState({
      showLocationOnMapId: null
    });
  }
  /**
   *
   */
  locationSelected(id) {
    vibrate(1000);
    this.setState({
      showLocationOnMapId: id
    });
  }

  /**
   *
   */
  showMap() {
    if (_.isNumber(this.state.showLocationOnMapId)) {
      const mountMap = () => {//todo move to separate file
        if (_.isNumber(this.state.showLocationOnMapId)) {
          let location = _.findWhere(this.props.locations, {id:this.state.showLocationOnMapId});
          const coordinates = parseCoordinates(location.coordinates);
          let myMap = new ymaps.Map('map', {
              center: coordinates,
              zoom: 10,
              behaviors: ['ruler', 'multiTouch', 'scrollZoom', 'drag', 'dblClickZoom']
            }, {
              searchControlProvider: 'yandex#search'
            }),
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
              hintContent: 'Собственный значок метки',
              balloonContent: 'Это красивая метка'
            }, {
              iconLayout: 'default#image',
              iconImageHref: '../../images/ic_location_on_black_24px.svg',
              iconImageSize: [30, 42],
              iconImageOffset: [-3, -42]
            });

          myMap.geoObjects.add(myPlacemark);
        }
      };

      return <div className="md-map-view">
        <div className="md-button_close" onClick={this.closeMap.bind(this)}>X</div>
        <div ref={mountMap} style={{width: '300px', height: '200px'}}id="map"></div>
      </div>
    }
  }
  /**
   *
   */
  getLocations() {
    if (_.isString(this.props.params.category)) {
      return this.getCategorisedLocations(this.props.params.category);
    } else if (this.state.viewByCategories) {
      return this.getCategorisedLocations();
    } else {
      return <div>
        <LocationsList onSelect={this.locationSelected.bind(this)} locations={this.props.locations}> </LocationsList>
      </div>
    }
  }
	/**
   *
   */
  render() {
    return <div>
      {this.getControlButtons()}
      {this.getLocations()}
      {this.showMap()}
    </div>
  }
}
