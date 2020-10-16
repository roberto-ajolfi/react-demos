import * as React from 'react'

const Another:React.FC  = (props) => {
    return (
        <div style={{ border: "4px dashed navy", backgroundColor: "lightskyblue"}}>
            {props.children}
        </div>
    )
}

export default Another;