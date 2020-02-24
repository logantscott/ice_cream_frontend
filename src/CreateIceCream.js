import React, { Component } from 'react'
import request from 'superagent';
import { getTypes } from './ice-cream-api.js'; // get Types endpoint call from api.js

export class CreateIceCream extends Component {
    state = {
        types: [],
        type: 2,
        vegan: true,
        will_licks: 1,
        logan_licks: 1,
        flavor: '',
        image: ''
    };
    
    // call /types endpoint and store results to state
    componentDidMount = async () => {
        const types = await getTypes();
        this.setState({ types: types.body });
    }
    handleFlavorChange = (e) => {
        this.setState({ flavor: e.target.value })
    }
    handleImageChange = (e) => {
        this.setState({ image: e.target.value })
    }

    handleTypeChange = (e) => {
        console.log(e.target.value)
        this.setState({ type: Number(e.target.value) })
    }
    handleWillLicksChange = (e) => {
        this.setState({ will_licks: Number(e.target.value) })
    }
    
    handleLoganLicksChange = (e) => {
        this.setState({ logan_licks: Number(e.target.value) })
    }
    handleVeganChange = (e) => {
        const actualBool = e.target.value === 'false' 
            ? false 
            : true
        this.setState({ vegan: actualBool })
    }
  
    handleSubmit = async (e) => {
        e.preventDefault();
        let newIceCream = {
            flavor: this.state.flavor,
            img_url: this.state.image,
            type: this.state.type,
            will_licks: this.state.will_licks,
            logan_licks: this.state.logan_licks,
            vegan: this.state.vegan
        }
        // newIceCream = await request.post('', newIceCream);
        console.log(newIceCream)
        alert(JSON.stringify(newIceCream, null, 2))
        // this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    
                    <br/>
                    <label>
                        Flavor: 
                        <input onChange={this.handleFlavorChange} value={this.state.flavor} />
                    </label>
                    <br/>
                    <label>
                        <br/>
                    <label>
                        Image: 
                        <input onChange={this.handleImageChange} value={this.state.image} />
                    </label>
                        Type: 
                        <select onChange={ this.handleTypeChange } value={ this.state.type }>
                            { this.state.types.map(type => <option value={type.id} > 
                            {type.name}
                            </option>)}
                        </select>
                    </label>
                    <br/>
                    <label>
                        Will Lick Count: 
                        <input type='number' onChange={this.handleWillLicksChange} value={this.state.will_licks} />
                    </label>
                    <br/>
                    <label>
                        Logan Lick Count: 
                        <input type='number' onChange={this.handleLoganLicksChange} value={this.state.logan_licks} />
                    </label>
                    <br/>
                    <label>
                        Is Vegan: 
                        <select onChange={this.handleVeganChange}>
                            <option value="true" >True</option>
                            <option value="false" >False</option>
                        </select>
                    </label>
                    <br />
                <button>Submit</button>
                </form>
            </div>
        )
    }
}
