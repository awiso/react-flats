import React, { Component } from 'react';
import Marker from './marker.jsx';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
    render(){
        console.log(config)
        return (
            <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
              center={this.props.center}
              defaultZoom={12}
            >
              <Marker
                lat={this.props.center.lat}
                lng={this.props.center.lng}
                text="Flat"
              />
            </GoogleMapReact>
          </div>
        );
    }
}

export default Map;
