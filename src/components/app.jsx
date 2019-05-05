import React, { Component } from 'react';
import FlatList from './flat_list.jsx';
import Map from './map';
import flats from '../../data/flats.js';

class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            selectedFlat: "Charm at the Steps of the Sacre Coeur/Montmartre",
            center: {
                lat: 48.885707,
                lng: 2.343543
            }
        }
    }
    selectFlat = (name) => {
        const new_flat = flats.find((flat) => { return flat.name === name});
        const new_name = new_flat.name;
        const new_center = {
            lat: new_flat.lat,
            lng: new_flat.lng
        }
        this.setState({
            selectedFlat: new_name,
            center: new_center
        })

    }
    
    render(){
        return (
            <div className="all_content">
                <FlatList all_flats={flats} selectFlat={this.selectFlat} selectedFlat={this.state.selectedFlat}/>
                <div className="map-container">
                    <Map defaultCenter={this.state.center} center={this.state.center}/>
                </div>
            </div>
        );
    }
}

export default App;
