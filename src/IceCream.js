import React, { Component } from 'react'

export class IceCream extends Component {

    componentDidMount() {
        console.log('Ice Cream Mounted....')
        console.log(this.props)
        }

    render() {
        
        return (
            <li>
                <p>{this.props.icecream.flavor}</p>   
                <p>{this.props.icecream.type}</p>   
                <p>{this.props.icecream.vegan ? 'Vegan' : ''}</p>   
                <p>Will's Licks: {this.props.icecream.will_licks}</p>   
                <p>Logan's Licks: {this.props.icecream.logan_licks}</p> 
                <img src={`https://hidden-forest-86930.herokuapp.com/${this.props.icecream.img_url}`} alt={this.props.icecream.flavor} />
            </li>
        )
    }
}
