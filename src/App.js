import React, { Component } from 'react';
import Map from './components/Map';
import Quakes from './components/Quakes';
import QuakeModel from './models/Quake';

class App extends Component {
  state = {
      quakes : []
    }

  componentDidMount(){ 
    QuakeModel.all().then(res => 
      this.setState({
        quakes: res.data.features
      }) 
    )
  }

  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          <h1>Welcome to GeoQuakes</h1>
          <Map quakes={this.state.quakes} />
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes: </h1>
          <Quakes quakes={this.state.quakes}/>
        </div>
      </div>
    );
  }
}

export default App;
