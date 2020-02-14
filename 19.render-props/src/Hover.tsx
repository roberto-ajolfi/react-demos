import React, { Component } from 'react'

export interface HoverProps {
    children: (hovering: boolean) => JSX.Element;
}

export class HoverState {
    constructor(public hovering: boolean) { }  
}

export default class Hover extends Component<HoverProps, HoverState> {
    /**
     *
     */
    constructor(props: HoverProps) {
        super(props);

        this.state = new HoverState(false);
    }
    state = { hovering: false }
    mouseOver = () => this.setState({ hovering: true })
    mouseOut = () => this.setState({ hovering: false })
    render() {
      return (
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          {this.props.children(this.state.hovering)}
        </div>
      )
    }
  }