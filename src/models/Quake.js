import axios from 'axios';
let quakePoint = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';

class QuakeModel {

  static all(){
    let request = axios.get(quakePoint)
    return request
  };
};

export default QuakeModel;