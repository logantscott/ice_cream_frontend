import React, { Component } from 'react';
import Request from 'superagent';

export class Details extends Component {
    state = {
        iceCreamFlavor: []
    }

    async componentDidMount() {
        console.log('Details Mounted....')
        // Hit the API single route here - /icecream/:flavor - this.props.match.params.flavor
        let data = await Request.get(`https://hidden-forest-86930.herokuapp.com/icecream/${this.props.match.params.flavor}`);
        this.setState({ iceCreamFlavor: data.body[0] })
        }

    render() {
        console.log('refreshing...')
        
        return (
            <li>
                <p>{this.state.iceCreamFlavor.flavor}</p>   
                <p>{this.state.iceCreamFlavor.type}</p>   
                <p>{this.state.iceCreamFlavor.vegan ? 'Vegan' : ''}</p>   
                <p>Will's Licks: {this.state.iceCreamFlavor.will_licks}</p>   
                <p>Logan's Licks: {this.state.iceCreamFlavor.logan_licks}</p> 
                <img src={this.state.iceCreamFlavor.img_url ? this.state.iceCreamFlavor.img_url.includes('http') ? this.state.iceCreamFlavor.img_url : `https://hidden-forest-86930.herokuapp.com/${this.state.iceCreamFlavor.img_url}` : ''} alt={this.state.iceCreamFlavor.flavor} />
            </li>
        )
    }
}
