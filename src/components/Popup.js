import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import MARKER_COLORS from '../constants/MarkerColors';

export default class Popup extends PureComponent {
  options = Object.keys(MARKER_COLORS).map(i => ({ value: i, color: MARKER_COLORS[i] }));

  handleChange = (val) => this.props.editMarker(val);
  removeMarker = () => this.props.removeMarker();

  render() {
    return (
      <div>
        <div className="marker-color-container">
          <p>Change marker's score:</p>
          {this.options.map((item, index) => (
            <div
              className="marker-color-item"
              key={item.value}
              style={{ backgroundColor: item.color }}
              onClick={() => this.handleChange(item.value)}
            >
              {index}
            </div>
          ))}
          <div className="remove-button-container">
          <FontAwesomeIcon
            icon={faTrash}
            size='2x'
            title="Remove Marker"
            className="remove-button"
            onClick={this.removeMarker}
          />
        </div>
        </div>
      </div>
    );
  }
}