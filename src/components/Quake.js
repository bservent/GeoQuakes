import React, { Component } from 'react';

class Quake extends Component {


  render(){
    let quakeStyle = {
      fontSize: parseFloat(this.props.mag) * 10 - 33,
      color: this.props.color,
    }
    return (
      <li>
        <span className={this.props.shake ? 'shakey': null} 
        style={quakeStyle}>
        {this.props.title}
        </span>
      </li>
    )

  }
}

export default Quake;