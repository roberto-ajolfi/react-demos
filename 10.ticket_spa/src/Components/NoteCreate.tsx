import React, { Component, ChangeEvent, FormEvent } from 'react'

interface NoteCreateProps {
    addNote: (note: string) => void;
}

interface NoteCreateState {
    note: string;
}

export default class NoteCreate extends Component<NoteCreateProps, NoteCreateState> {

    constructor(props: NoteCreateProps) {
        super(props);

        this.state = { note: '' };
    }

    handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        this.setState({ note: e.target.value });
    }

    handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.props.addNote(this.state.note);
        this.setState({ note: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-10">
                        <textarea required={true} className="form-control" 
                            name="description" 
                            value={this.state.note} 
                            onChange={this.handleChange}>
                        </textarea>
                    </div>
                    <div className="col-md-2 text-right">
                        <button type="submit" className="btn btn-outline-primary btn-small">
                            <i className="fa fa-plus-square-o"></i>
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}
