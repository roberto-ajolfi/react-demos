import React, { Component } from 'react'

export default class TicketList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-12">
                <h2>List of Tickets</h2>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <button className="btn btn-primary">Open New Ticket</button>
            </div>
        </div>
        <div className="row">
            <div className="col-12">&nbsp;</div>
        </div>
        <div className="row">
            <div className="col-12">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Category</th>
                            <th>Title</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>System</td>
                            <td>Password lost!</td>
                            <td>Edit | Delete</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Development</td>
                            <td>Bug in Travel app</td>
                            <td>Edit | Delete</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    )
  }
}
