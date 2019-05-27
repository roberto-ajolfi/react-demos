import React, { Component } from 'react'

export default class UncontrolledForm extends Component<any, any> {
    fileInputTag: any;

    constructor(props: any) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        this.fileInputTag = React.createRef();
    }

    handleSubmit(event: any) {
        event.preventDefault();
        alert(`è stato selezionato il file: ${this.fileInputTag.current.files[0].name}`);
    }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <label>
            Scegli un file:
            <input type="file" ref={this.fileInputTag} />
        </label>
        <br />
        <button type="submit">Upload</button>
        </form>
    )
  }
}
