import React from 'react';
import MARKERS_TYPES from '../constants/MarkersTypes';

const Statistic = ({ markers, exportFile}) => {
  const getAmountOfMarkersType = (type) => markers.filter(element => element.score === type).length;
  return <div className="markerlist-container">
    <ul className='markerlist'>
      <li key={0}>
        <div className='score-title'>Total:</div>
        <div className='score-value'>{markers.length}</div>
      </li>
      {Object.keys(MARKERS_TYPES).map(
        i => ((
          <li key={i}>
            <div className='score-title'>{MARKERS_TYPES[i]}: </div>
            <div className='score-value'>{getAmountOfMarkersType(i)}</div>
          </li>
        ))
      )}
    </ul>
    <button className='export-btn' onClick={exportFile}>Export</button>
  </div>
}

export default Statistic;
