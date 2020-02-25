import React, { Component } from 'react'
import { getTypes } from './ice-cream-api.js'; // get Types endpoint call from api.js
import { Link } from 'react-router-dom';

export class Types extends Component {

    state = {
        types: []
    }

    componentDidMount = async () => {
        const types = await getTypes();
        this.setState({ types: types.body });
    }

    render() {
        return (
            <span>
                {this.state.types.map(type => (
                    <Link to={{pathname: `/ice-cream/type/${type.name}`, clickedFlavor: type.name}}>{type.name}</Link>
                ))}
            </span>
        )
    }
}
