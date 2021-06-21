import React, { Component } from 'react'

class DemoForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: '',
            comment: '',
            gender: 'male',
            pizzaorpasta: 'Pizza',
            Oregano: false
        }
    }

    handleInputChange= (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
      }
    
    render() {
        return (
            <form>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" value={this.state.username} onChange={this.handleInputChange} />
                </div>
                <div>
                    <label htmlFor="comment">Comments</label>
                    <textarea id="comment" name="comment" value={this.state.comment} onChange={this.handleInputChange}></textarea>
                </div>
                <div>
                    <label htmlFor="gender">Gender</label>
                    <select id="gender" name="gender" value={this.state.gender} onChange={this.handleInputChange}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>                    
                    </select>
                </div>
                <div>
                    <label>Pizza or Pasta:   
                    <input type="radio" value="Pizza" name="pizzaorpasta" checked={this.state.pizzaorpasta==="Pizza"} onChange={this.handleInputChange}/> Pizza
                    <input type="radio" value="Pasta" name="pizzaorpasta" checked={this.state.pizzaorpasta==="Pasta"} onChange={this.handleInputChange}/> Pasta
                    </label> 
                </div>
                <div>
                    <label>Oregano:    
                    <input type="checkbox"  name="Oregano" checked={this.state.Oregano===true} onChange={this.handleInputChange}/> 
                    </label>
                </div>
                {/* TODO -- Drop-down, radio, checkbox */}
            </form>
        )
    }
}

export default DemoForm
