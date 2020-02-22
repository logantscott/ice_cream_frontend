import React, { Component } from 'react'
import request from 'superagent';
export default class CreateIceCream extends Component {
    state = {
        types: [],
    };
    componentDidMount = async () => {
        const types = await request.get('');
        this.setState({ types: types.body });
    }
    handleFlavorChange = (e) => {
        this.setState({ flavor: e.target.value })
    }
    handleImageChange = (e) => {
        this.setState({ image: e.target.value })

    handleTypeChange = (e) => {
        console.log(e.target.value)
        this.setState({ type: Number(e.target.value) })
    }
    handleWillLicksChange = (e) => {
        this.setState({ will_licks: Number(e.target.value) })
    
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
        const newIceCream = {
            flavor: this.state.flavor,
            img_url: this.state.image,
            type: this.state.type,
            will_licks: this.state.will,
            logan_licks: this.state.logan,
            vegan: this.state.vegan
        }
        const newIceCream = await request.post('', newIceCream);
        console.log(newIceCream)
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    
                    <br/>
                    <label>
                        Flavor: 
                        <input onChange={this.handleFlavorChange} />
                    </label>
                    <br/>
                    <label>
                        <br/>
                    <label>
                        Image: 
                        <input onChange={this.handleImageChange} />
                    </label>
                        Type: 
                        <select onChange={ this.handleTypeChange }>
                            { this.state.types.map(type => <option value={type.id}> 
                            {type.name}
                            </option>)}
                        </select>
                    </label>
                    <br/>
                    <label>
                        Will Lick Count: 
                        <input type='number' onChange={this.handleWillLicksChange} />
                    </label>
                    <br/>
                    <label>
                        Logan Lick Count: 
                        <input type='number' onChange={this.handleLoganLicksChange} />
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
