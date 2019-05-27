import React, { Component } from 'react'

export default class ItemsList extends Component<any, any> {
  render() {
    const items = this.props.items;
  
    const listItems = items.map((item: string) =>
        <li>{item}</li>
    );
    
    return (
        <ul>{listItems}</ul>
    );
  }
}
