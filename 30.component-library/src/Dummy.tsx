import * as React from 'react'

const Dummy:React.FC = (props) => {
    return (
        <div style={{ border: "4px double red", backgroundColor: "Crimson" }}>
            {props.children}
        </div>
    )
}

export default Dummy;