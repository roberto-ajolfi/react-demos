import React, { Component } from 'react'
import { Table } from 'reactstrap';
import TicketDataService from '../services/dataService';

export default class List extends Component<any, any> {
    constructor(props: any){
        super(props);

        this.state = {
            error: null,
            loading: true,
            items: []
          };
    }

    componentDidMount() {
        const service = new TicketDataService();
        service
            .getTickets()
            .then((data: any) => {
                this.setState({
                    loading: false,
                    items: data
                });
            },
            (error: any) => {
                this.setState({
                    laoding: false,
                    error
                });
            });
    }

    render() {
        const { error, loading, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (loading) {
            return <div>Loading...</div>;
        } else {
            return (
                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Priority</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item: any) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.category}</td>
                                <td>{item.priority}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )
        }
    }
}
