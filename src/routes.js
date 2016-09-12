import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './components/app.js';
import Categories from './containers/categoriesContainer.js';
import PageNotFound from './components/pageNotFound/pageNotFond';
import CategoriesEditor from './containers/categoryEditor.js';
import {LocationViewer} from './containers/locationContainer.js';
import LocationEditorPage from './components/locationEditorPage.js';


export default (
    <Route path="/" component={App}>
      <IndexRoute component={Categories}/>
      <Route path="/categories/edit" component={CategoriesEditor} />
      <Route path="/categories/view" component={Categories} />
      <Route path="/locations/edit" component={LocationEditorPage} />
      <Route path="/locations/view" component={LocationViewer} />
      <Route path="/locations/view/:category" component={LocationViewer} />
      <Route path="*" component={PageNotFound}/>
    </Route>);
