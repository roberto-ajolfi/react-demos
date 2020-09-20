import React, { Component, useEffect, useState } from 'react'
import { RouteComponentProps, Link, Redirect } from 'react-router-dom';
import { useParams } from 'react-router';
import Ticket from '../Models/TicketViewModel';
import TicketDataService from '../Services/TicketDataService';
import { Container, Row, Col } from 'reactstrap';
import '../index.css';

interface TicketDeleteState {
    ticketToBeDeleted: Ticket;
    completed: boolean;
}

const TicketDelete = () => {
    const [ ticket, setTicket ] = useState({} as Ticket);
    const [ completed, setCompleted ] = useState(false);
    //@ts-ignore dynamic value
    const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            const service = new TicketDataService();

            service
            .getTicketById(id)
            .then((data: any) => {
                setTicket(data);
            },
            (error: any) => {
                
            });
        };

        getData();
    }, [id]);

    const deleteTicket = () => {
        const service = new TicketDataService();

        service
            .deleteTicketById(id)
            .then((data: any) => {
                setCompleted(true);
            },
            (error: any) => {
                setCompleted(true);
            });  
    }

    if (completed) {
        return <Redirect to='/ticketlist'/>;
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="deleteHeader">Are you sure you want to delete this Ticket?</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    &nbsp;
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className="ticketId">Ticket #{ ticket.id }</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>{ticket.title}</h2>
                    <span><em>{ticket.description}</em></span>
                </Col>
            </Row>
            <Row><Col>&nbsp;</Col></Row>
            <Row>
                <Col>
                <button className="btn btn-lg btn-danger" onClick={deleteTicket}>Yes</button>
                </Col>
                <Col>
                <Link to="/ticketlist" className="btn btn-lg btn-outline-secondary">No</Link>
                </Col>
            </Row>
      </Container>
    );
};

export default TicketDelete;