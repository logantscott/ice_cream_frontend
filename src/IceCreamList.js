import React, { Component } from 'react';
import { getIceCream } from './ice-cream-api.js';
import { IceCream } from './IceCream.js';

export class IceCreamList extends Component {
    state = {   icecreams: []
            }

    async componentDidMount() {
        console.log('Home Mounted. First API Call...')
        const data = await getIceCream();

        console.log(data.body);
    
        if (data.body) {
            this.setState({ icecreams: data.body })
        }
        }
    

    render() {
        console.log('thestuff', this.state.icecreams)
        return (
            
            <ul>
                {this.state.icecreams.map(icecream => (
                    
                    <IceCream icecream={icecream} />

                ))}
            </ul>
        )
    }
}
