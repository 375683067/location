import React from 'react';
import {LocationEditor, LocationList} from '../containers/locationContainer.js';
import {EDIT_STATE, ADD_NEW_STATE, SAVE_STATE} from '../constants/common.js';

export default class LocationEditorPage extends React.Component {

  constructor() {
    super();

    this.state = {
      mode: ADD_NEW_STATE,
      editedElementId: null
    }
  }
  /**
   * @param {event} [e]
   */
  onEditEnd(e) {
    e && e.preventDefault();
    this.setState({
      mode: ADD_NEW_STATE,
      editedElementId: null
    });
  }
  /**
   * @param id
   */
  editLocation(id) {
    this.setState({
      mode: EDIT_STATE,
      editedElementId: id
    })
  }
  /**
   *  @return {XML}
   */
  render() {
    return <div className="md-location-editor-page">
      <LocationEditor onEditEnd={this.onEditEnd.bind(this)} editedElementId={this.state.editedElementId} mode={this.state.mode}></LocationEditor>
      <LocationList onEditEnd={this.onEditEnd.bind(this)} onEdit={this.editLocation.bind(this)} mode={EDIT_STATE}></LocationList>
    </div>;
  }
}
