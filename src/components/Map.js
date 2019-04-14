import React, { Component } from 'react';
import * as MapboxGl from 'mapbox-gl';
import map from '../constants/MapConfig';
import Statistic from './Statistics';

import Marker from './Marker';

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      markersList: []
    }
    this.exportFile = this.exportFile.bind(this);
  }

  componentDidMount() {
    this.map = new MapboxGl.Map(map);
    this.map.on('click', (e) => e.originalEvent.target.tagName === 'CANVAS' && this.addMarker(e));
  }

  addMarker(event) {
    const { lngLat } = event;
    const marker = { id: Date.now(), score: 'zero', lngLat }
    this.setState({ markersList: [...this.state.markersList, marker] });
  }

  onMarkerRemove(marker) {
    this.setState({ markersList: this.state.markersList.filter(i => i.id !== marker.id) });
  }

  onEditMarker(marker) {
    const markersList = this.state.markersList.map(i => i.id === marker.id ? marker : i);
    this.setState({ markersList });
  }

  exportFile() {
    const element = document.createElement('a');
    const file = new Blob([JSON.stringify(this.state.markersList)], { type: 'application/json' });
    element.href = URL.createObjectURL(file);
    element.download = 'mapExportData.json';
    document.body.appendChild(element);
    element.click();
  }

  render() {
    return (
      <div>
        <div id="map"></div>
        {this.state.markersList.map((i, index) => (
          <Marker
            key={index}
            map={this.map}
            marker={i}
            handleRemoveMarker={(marker) => this.onMarkerRemove(marker)}
            handleEditMarker={(marker) => this.onEditMarker(marker)}
          />
        ))}
        <Statistic markers={this.state.markersList} exportFile={this.exportFile} />
      </div>
    );
  }
}

export default Map;
