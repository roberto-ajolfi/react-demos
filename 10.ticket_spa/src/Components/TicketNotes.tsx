import React, { Component } from 'react';
import NoteDataService from '../Services/NoteDataService';
import Note from '../Models/Note';
import { Link } from 'react-router-dom';
import NoteCreate from './NoteCreate';

interface TicketNotesProps {
    ticketId: string;
}

interface TicketNotesListState {
    notes: any[];
    loading: boolean;
}

export default class TicketNotes extends Component<TicketNotesProps, TicketNotesListState> {
    constructor(props:TicketNotesProps) {
        super(props);

        this.state = {
            notes: [],
            loading: true
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        const service = new NoteDataService();

        service
            .getNotesByTicketId(this.props.ticketId)
            .then((data: any) => {
                this.setState({ notes: data, loading: false });
            },
            (error: any) => {
                this.setState({ notes: [], loading: false });
            });
    }

    addNoteToTicket = (note: string) => {
        const service = new NoteDataService();

        const newNote = new Note(
            0, 
            note, 
            new Date(), 
            Number(this.props.ticketId)
        );

        service
            .createNewNote(newNote)
            .then((data: any) => {
                this.setState({ loading: true });
                this.loadData();
            },
            (error: any) => {
                this.setState({ loading: true });
                this.loadData();
            });
    }

    removeFromTicket = (noteId: number) => {
        const service = new NoteDataService();

        service
            .deleteNoteById(String(noteId))
            .then((data: any) => {
                this.setState({ loading: true });
                this.loadData();
            },
            (error: any) => {
                this.setState({ loading: true });
                this.loadData();
            });
    }

    render() {
        const { notes, loading } = this.state;

        let notesData = notes.map((item: Note) => (
            <tr key={item.id}>
                <td>{new Date(item.created).toISOString().slice(0,10)}</td>
                <td>{item.text}</td>
                <td>
                    <a className="btn btn-warning btn-sm" href="#" 
                        onClick={ (e: any) => { 
                            e.preventDefault(); 
                            this.removeFromTicket(item.id); 
                        } }>
                        <i className="fa fa-trash"></i>&nbsp;Delete
                    </a>
                </td>
            </tr>
        ));

        let contents = loading
            ? <tr><td colSpan={3} style={{"textAlign":"center"}}><span>Loading...</span></td></tr>
            : notesData;

        let containerStyle ={ border: "0px solid #cecece", padding: "5px" }
        return (
            <div className="container" style={containerStyle}>
                <div className="row">
                    <div className="col-12">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Note</th>
                                    <th>
                                        &nbsp;
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {contents}
                            </tbody>
                        </table>
                    </div>
                </div>
                <NoteCreate addNote={this.addNoteToTicket} />
            </div>
        )
    }
}
