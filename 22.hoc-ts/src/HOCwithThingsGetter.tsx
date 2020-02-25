import React from 'react';
import getThings from './Service';
import { Subtract } from 'utility-types';
import { ThingsProps } from './HOCwithThings';

export default function withThingsGetter<T extends ThingsProps>(Component: React.ComponentType<T>, getter: Function) {
    return class extends React.Component<Subtract<T, ThingsProps>> {
      state = { things: [] as string[] };
      async componentDidMount() {
        const things = await getter();
        this.setState({ things });
      }
      render() {
        // A type cast (props as P) is required here from TypeScript v3.2 onwards, due to a likely bug in TypeScript.
        return <Component {...this.props as T} things={this.state.things} />;
      }
    };
  }