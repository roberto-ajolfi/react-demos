import React from 'react';
import PropTypes from 'prop-types';

const Renderable = ({children}) => {
    return(<div>
        <h1>Renderable</h1>
        {children}
    </div>);
}

Renderable.propTypes = {
    children: PropTypes.element.isRequired
}

export default Renderable;