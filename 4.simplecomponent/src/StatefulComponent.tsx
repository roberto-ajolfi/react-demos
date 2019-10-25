import React, { Component } from 'react'

class StatefulComponentState {
    constructor(public user: any,
    public detailsShowing: boolean = false,
    public detailsVisibilityLabel: string = '') {}
}

export default class StatefulComponent extends Component<any, StatefulComponentState> {
    constructor(props: any) {
        super(props);

        this.state = new StatefulComponentState(
            {
                username: 'roberto.ajolfi',
                firstname: 'Roberto',
                lastname: 'Ajolfi'
            },
            false,
            'Show');
    }

    toggleDetails = () => {
        const label = this.state.detailsVisibilityLabel == 'Show' ? 'Hide' : 'Show';
        this.setState((prevState: StatefulComponentState) => {
            return { 
                detailsShowing: !prevState.detailsShowing, 
                detailsVisibilityLabel: label }
        });
    }

    render() {
        return (
            <div>
                <h1>User Details</h1>
                <h3>UserName:</h3>{this.state.user.username}
                <br/><a href="#" onClick={this.toggleDetails}>{this.state.detailsVisibilityLabel} Details</a>
                <div className={'box ' + (this.state.detailsShowing ? '' : 'hidden')}>
                    <h3>{this.state.user.firstname}</h3>
                    <h3>{this.state.user.lastname}</h3>
                    <h4>bla bla bla</h4>
                </div>
            </div>
        )
    }
}
