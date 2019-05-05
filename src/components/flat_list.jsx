import React, { Component } from 'react';
import Flat from './flat.jsx';

class FlatList extends Component {
    render(){
        return (
            <div className="flat-list">
                {this.props.all_flats.map((flat, index) => {
                    return <Flat 
                        name={flat.name} 
                        key={index}
                        imageUrl={flat.imageUrl} 
                        price={flat.price}
                        priceCurrency={flat.priceCurrency}
                        lat={flat.lat}
                        lng={flat.lng} 
                        selectFlat={this.props.selectFlat}
                        status={(this.props.selectedFlat === flat.name) ? "active" : ""}
                    />
                })}
            </div>
        );
    }
}

export default FlatList;
