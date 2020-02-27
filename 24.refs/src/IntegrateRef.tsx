import React, { Component } from 'react'
import $ from "jquery";

// TO BE COMPLETED : FIND A WAY TO MANAGE THE jQuery PLUGIN

export default class IntegrateRef extends Component {
    el: any;
    $el : any;

    componentDidMount() {
        this.$el = $(this.el);
        this.$el.sortable();
      }
    
      componentWillUnmount() {
        this.$el.somePlugin('destroy');
      }

      renderItems = () => {
        return ["one", "two", "three", "four"].map( (item, i) =>
          <li key={i} >
            { item }
          </li>
        );
      }
    
      render() {
        return (
            <ul ref={el => this.el = el}>
                {this.renderItems()}
            </ul>
        );
      }
}
