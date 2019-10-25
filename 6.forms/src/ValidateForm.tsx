import React, { Component } from 'react'
import moment from 'moment'

export default class ValidateForm extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = { 
            name: '', 
            role: '', 
            date: moment().format("YYYY-MM-DD") 
        };
    }

    handleSubmit = (event: any) => {
        alert('Submitted: ' + this.state.name + ' is a ' + this.state.role);
        event.preventDefault();
    }

    /* handleChange(event: any) {
        this.setState({ value: event.target.value });
    } */

    handleChange = (event: any) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Validate Form</h2>
                <div className="form-group row">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" type="text" name="name" 
                        value={this.state.name} onChange={this.handleChange} required/> 
                </div>
                <div className="form-group row">
                    <label htmlFor="name">Role</label>
                    <select className="form-control" name="role" required
                        value={this.state.role} onChange={this.handleChange}>
                        <option value="">-- Select a Role --</option>
                        <option value="admin">Administrator</option>
                        <option value="user">Regular User</option>
                        <option value="guest">Guest User</option>
                    </select>
                </div>
                <div className="form-group row">
                    <label htmlFor="date">Date</label>
                    <input className="form-control" type="date" name="date" 
                        value={this.state.date} onChange={this.handleChange}/> 
                </div>
                <div className="form-group row">
                    <input className="btn btn-primary" type="submit" value="Submit" /> 
                </div>
            </form>
        )
    }
}
