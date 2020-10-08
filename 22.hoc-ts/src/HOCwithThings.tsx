import React from 'react';
import getThings from './Service';
import { Subtract } from 'utility-types';

export interface ThingsProps {
  things: string[];
}

// implementazione di Subtract ... come dimostrazione di cosa fare in typescript
// interface TotalProps {
//   title: string;
//   things: string[];
// }

// declare type SetDifference<A, B> = A extends B ? never : A;
// declare type Subtract<T extends T1, T1 extends object> = Pick<T, SetDifference<keyof T, keyof T1>>;

// type Difference = SetDifference<TotalProps, ThingsProps>;
// type FinalType = Subtract<TotalProps, ThingsProps>;
// const l: FinalType = { title: "Paperinik" };

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