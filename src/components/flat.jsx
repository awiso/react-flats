import React, { Component } from 'react';

class Flat extends Component {
    constructor(props){
        super(props);

        this.state = { active: false };
    }

    handleClick = () => {
        this.props.selectFlat(this.props.name);
    }

    render(){
        return (
            <div onClick={this.handleClick} className={"card " + this.props.status} style={{backgroundImage: `url(${this.props.imageUrl})`}} >
                <div className="card-category">{this.props.price + " " + this.props.priceCurrency}</div>
                <div className="card-description">
                    <h2>{this.props.name}</h2>
                </div>
                <a className="card-link" href="#"></a>
            </div>
        );
    }
}

export default Flat;
