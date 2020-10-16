import * as React from 'react'

const Orange:React.FC = (props) => {
    return (
        <div style={{ border: "13px dotted orange", backgroundColor: "lightsalmon"}}>
            {props.children}
        </div>
    )
}

export default Orange;