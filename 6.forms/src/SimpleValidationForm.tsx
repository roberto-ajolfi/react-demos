import React, { Component, ChangeEvent } from "react";
import SimpleReactValidator from 'simple-react-validator/dist/simple-react-validator.min.js';

export default class SimpleForm extends Component<any, any> {
    validator: any;

    constructor(props: any) {
        super(props);

        this.state ={
            firstName: '',
            lastName: '',
            role: 'admin'
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.validator = new SimpleReactValidator({
            className: 'errorMessage',
            messages: {
                required: 'The :attribute field is mandatory.',
                alpha: 'Please use only alphabetic characters.'
            }
        });
    }

    handleSubmit(event: any) {
        if(this.validator.allValid()) {
            alert('Form Data: ' + JSON.stringify(this.state));
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
        
        event.preventDefault();
    }

    handleChange(event: any) {
        const target = event.target;
        const value = target.type == 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group row">
                    <label htmlFor="firstName">First Name</label>
                    <input className="form-control" type="text" name="firstName"
                        value = {this.state.firstName} onChange={this.handleChange} />
                    {this.validator.message('FirstName', this.state.firstName, 'required|alpha')}
                </div>
                <div className="form-group row">
                    <label htmlFor="lastname">Last Name</label>
                    <input className="form-control" type="text" name="lastName"
                        value = {this.state.lastName} onChange={this.handleChange} />
                </div>
                <div className="form-group row">
                    <label htmlFor="role">Role</label>
                    <select className="form-control" name="role" 
                        value={this.state.role} onChange={this.handleChange}>
                        <option value="na">-- Select a Role --</option>
                        <option value="admin">Administrator</option>
                        <option value="user">Regular User</option>
                        <option value="guest">Guest User</option>
                    </select> 
                </div>
                <div className="form-group row">
                    <input className="btn btn-primary" type="submit" 
                        value="Submit" /* disabled={!this.validator.allValid()} */ />
                </div>
            </form>
        );
    }
}