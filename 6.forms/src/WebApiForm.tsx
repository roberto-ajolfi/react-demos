import React, { Component } from 'react'
import moment from 'moment'

export default class WebApiForm extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = { 
            name: '', 
            role: 'na', 
            date: moment().format("YYYY-MM-DD"),
            state: '',
            states: []
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    apiURL: string = "https://localhost:44328/api/state";
    async getState() {
        try {
            var promise = await fetch(this.apiURL, {
                headers: new Headers({
                  "Authorization": "Basic " + btoa("guest1:Gu&st!")
                })
            });

            const data = await promise.json();
            return data;
        } catch(err) {
            return [];
        }
    }

    componentDidMount() {
        this.getState()
        .then(
            (data:any) => {
                this.setState( { states: data } )
            },
            (err:any) => {
                this.setState( { states: []} )
            }
        );
    }

    handleSubmit(event: any) {
        alert('Submitted: on ' + this.state.date + " " +
            this.state.name + ' is a ' + this.state.role +
            " (State: " + this.state.state + ")");
        event.preventDefault();
    }

    /* handleChange(event: any) {
        this.setState({ value: event.target.value });
    } */

    handleChange(event: any) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    render() {
        const stateOptions = (<React.Fragment>
            { this.state.states.map(
                (item: {id: number, description: string}) => 
                    <option key={item.id} value={item.id}>{item.description}</option>
            )}
        </React.Fragment>);
        const pippo = this.state.states.map(
            (item: {id: number, description: string}) => 
                <option value={item.id}>{item.description}</option>
        );
        
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Regular Form</h2>
                <div className="form-group row">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" type="text" name="name" 
                        value={this.state.name} onChange={this.handleChange}/> 
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
                    <label htmlFor="state">State</label>
                    <select className="form-control" name="state" 
                        value={this.state.state} onChange={this.handleChange}>
                        <option value="na">-- Select a State --</option>
                        {stateOptions}
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
