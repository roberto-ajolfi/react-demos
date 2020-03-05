import React, { Component } from 'react';

const View = React.memo((p: { name: string }) => {
    return(<h1>Hi, I'm {p.name}</h1>);
});

export default class SimpleMemo extends Component {
    names = ["Pietro", "Paolo"];
    state = { name: "Anonymous" };
  
    componentDidMount() {
      setInterval(() => {
        const name = this.generateName();
        this.setState({ name });
      }, 1000);
    }
  
    generateName = () =>
      this.names[Math.floor(Math.random() * this.names.length)];
  
    render() {
      return <View name={this.state.name} />;
    }
  }