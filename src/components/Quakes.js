import React, { Component } from 'react';
import Quake from './Quake';
class Quakes extends Component {

  numToColor(num){
    return num >= 6 ? 'purple':
      num >= 5 ? 'red':
        'orange'
  }

  render(){
    let quakesList = this.props.quakes.map( (elem, idx) =>{

      return <Quake  
      shake={elem.properties.mag >= 6} 
      color={this.numToColor(elem.properties.mag)} 
      key={idx} mag={elem.properties.mag} 
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