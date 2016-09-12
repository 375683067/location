import React from 'react';
import {Link} from 'react-router';
import HeaderButtons from './headerButtons.js';

export default class App extends React.Component {
	/**
   *
   * @return {XML}
   */
  render() {
    let context = this.props.location.pathname.split('/')[1];//todo takes somehow from parameters.
    return <div className="md-app">
      <header className="md-header">
        <HeaderButtons context={context || 'categories'} />
      </header>
      <div className="md-app__content">
        <div className="md-app__content-container">
          { this.props.children }
        </div>
      </div>
      <footer className="md-app__footer">
        <Link className="md-app__footer-item md-app__footer-item_categories" to="/categories/view">Categories</Link>
        <Link  className="md-app__footer-item  md-app__footer-item_locations"  to="/locations/view">Locations</Link>
      </footer>
    </div>;
  }
}
