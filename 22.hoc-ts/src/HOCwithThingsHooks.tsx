import React from 'react';
import getThings from './Service';
import { Subtract } from 'utility-types';
import { useState, useEffect } from 'react';
import { ThingsProps } from './HOCwithThings';

export default function withThingsH<T extends ThingsProps>(Component: React.ComponentType<T>) {
    return (props: Subtract<T, ThingsProps>) => {
        const [things, setThings] = useState(['']);
        useEffect(() => {
            getThings().then(
                things => { setThings(things); }
            );
            
        }, []);

        return <Component {... props as T} things={things} />;
    }
}
