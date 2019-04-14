import React, { Component } from 'react';
import * as MapboxGl from 'mapbox-gl';

import Map from './components/Map';
import './App.css';

MapboxGl.accessToken = 'pk.eyJ1IjoiZGlhbmEtbGVtZW4iLCJhIjoiY2p1ZWVuNGpnMDJrNDQzcGFsZHVmbG9tNSJ9.WhGU5WTI4hYzFU8a3nxhJQ';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map />
      </div>
    );
  }
}

export default App;
