import React, { Component } from 'react';
import { pattern2} from './data.js'
import Cell from './Cell.js'

export default class Matrix extends Component {
  
  genRow = (vals) => {
    
    return vals.map((val, i) => <Cell key={i} value={val}/>) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
    
    return this.props.values.map((rowVals, ind) => <div key={ind} className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}
Matrix.defaultProps= {
  values: pattern2
}
