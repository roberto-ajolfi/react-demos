import React from 'react'

interface HeaderProps {
    name: string;
}

const Header = (props: HeaderProps) => {
    return (
        <h1 data-testid='hdr'>Hello, {props.name} from the 'real' Component</h1>
    )
}

export default Header;