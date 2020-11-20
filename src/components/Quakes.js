import React, { Component } from 'react';
import Quake from './Quake';
class Quakes extends Component {

  numToColor(num){
    return num >= 6 ? 'red':
      num >= 5 ? 'violet':
        'orange'
  }

  render(){
    let quakesList = this.props.quakes.map( (elem, index) =>{

      return <Quake  
      shake={elem.properties.mag >= 6} 
      color={this.numToColor(elem.properties.mag)} 
      key={index} mag={elem.properties.mag} 
      title={elem.properties.title}  
      /> 
    })

    return  (
      <div>
        <ul>
          {quakesList}
        </ul>
      </div>
    )
  }
}

export default Quakes;