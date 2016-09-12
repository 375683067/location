import React from 'react';
import { browserHistory } from 'react-router';

export default class HeadersButtons extends React.Component {
	/**
   * view selected context
   */
  goToView() {
    browserHistory.push(`/${this.props.context}/view`)
  }
  /**
   * edit selected context
   */
  goToEdit() {
    browserHistory.push(`/${this.props.context}/edit`)
  }

  render() {
    return <div>
      <button onClick={this.goToView.bind(this)} className="md-button">View</button>
      <button onClick={this.goToEdit.bind(this)} className="md-button md-button_right">Edit</button>
    </div>;
  }
}
