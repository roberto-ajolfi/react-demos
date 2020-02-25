import React from 'react';
import getThings from './Service';
import { Subtract } from 'utility-types';

export interface ThingsProps {
    things: string[];
  }

export default function withThings<T extends ThingsProps>(Component: React.ComponentType<T>) {
  // return class extends React.Component<Subtract<T, ThingsProps>> {
  class WrappedComponent extends React.Component<Subtract<T, ThingsProps>> {
      state = { things: [] as string[] };
      async componentDidMount() {
        const things = await getThings();
        this.setState({ things });
      }
      render() {
        // A type cast (props as P) is required here from TypeScript v3.2 onwards, due to a likely bug in TypeScript.
        return <Component {...this.props as T} things={this.state.things} />;
      }
    };

    (WrappedComponent as any).displayName = `WithThings(${getDisplayName(Component)})`;

    return WrappedComponent;
  }

  function getDisplayName<T>(WrappedComponent: React.ComponentType<T>) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }