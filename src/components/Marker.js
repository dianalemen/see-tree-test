import * as MapboxGl from 'mapbox-gl';
import Popup from './Popup';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import MARKER_COLORS from '../constants/MarkerColors';

class Marker extends Component {
  constructor(props) {
    super(props);
    this.map = this.props.map;
    this.addMarker(this.props.marker);
  }

  addMarker(marker) {
    const popupContainer = document.createElement('div');
    ReactDOM.render(React.createElement(
      Popup, { editMarker: (param) => this.editMarker(param), removeMarker: () => this.removeMarker() }
    ), popupContainer);
    this.popup = new MapboxGl.Popup({ offset: 25 }).setDOMContent(popupContainer);
    this.marker = new MapboxGl.Marker({
      draggable: true,
      color: MARKER_COLORS[marker.score]
    })
      .setPopup(this.popup)
      .setLngLat(Object.values(marker.lngLat))
      .addTo(this.map);
  }

  editMarker(score) {
    this.props.handleEditMarker({ ...this.props.marker, score });
    const color = this.getMarkerColor(score);
    this.marker.remove();
    this.marker = new MapboxGl.Marker({
      draggable: true,
      color
    })
      .setLngLat(Object.values(this.marker.getLngLat()))
      .setPopup(this.popup)
      .addTo(this.map);

  }

  getMarkerColor(score) {
    return MARKER_COLORS[score];
  }

  removeMarker() {
    this.marker.remove();
    this.props.handleRemoveMarker(this.props.marker);
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default Marker;
