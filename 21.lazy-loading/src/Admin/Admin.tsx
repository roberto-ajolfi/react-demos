import React, { Component } from 'react'
import { Switch, Link, Route, RouteComponentProps } from 'react-router-dom';

import AdminUsers from './AdminUsers';
import AdminGroups from './AdminGroups';

export default class Admin extends Component<RouteComponentProps<{}>, any> {
  render() {
    const style = { border: "1px solid white",backgroundColor: "navy", color: "white", width: "400px"};
    const { match } = this.props

    return (
      <div style={style}>
        <h1>Admin</h1>
        <Link to={ match.url + "/users" }>Users</Link>&nbsp;|&nbsp;
        <Link to={ match.url + "/groups" }>Groups</Link>

        <Switch>
            <Route path={ match.url + "/users" } component={AdminUsers} />
            <Route path={ match.url + "/groups" } component={AdminGroups} />
        </Switch>
      </div>
    )
  }
}
