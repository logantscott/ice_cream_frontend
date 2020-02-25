import React, { Component } from 'react';
import { IceCream } from './IceCream.js';
import Request from 'superagent';
import { BrowserRouter as Router } from 'react-router-dom';

export class Type extends Component {
    state = {   icecreams: []
            }

    async componentDidMount() {
        console.log('Type Mounted....')
        // Hit the API type route here - /types/:type - this.props.match.params.type
        let data = await Request.get(`https://hidden-forest-86930.herokuapp.com/types/${this.props.match.params.type}`);
        if (data.body) {
            this.setState({ icecreams: data.body })
        }
    }
    
    async shouldComponentUpdate(nextProps){
        // don't try and understand this - don't try this at home - but somehow updates page on passing state from route of the flavor being clicked on to force a new call to that flavor (from the endpoint)
        if (nextProps.location.clickedFlavor !== this.props.location.clickedFlavor) {
            let data = await Request.get(`https://hidden-forest-86930.herokuapp.com/types/${nextProps.location.clickedFlavor}`);
            if (data.body) {
            this.setState({ icecreams: data.body })
        }
        }
    }
    
    render() {
        return (
            <ul>
                {this.state.icecreams.map(icecream => (
                    <IceCream icecream={icecream} />
                ))}
            </ul>
        )
    }
}
