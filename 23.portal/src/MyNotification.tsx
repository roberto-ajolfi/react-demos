import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const notificationRoot = document.getElementById('notification-root');

interface MyNotificationProps {
    message: string,
    onClose: () => void
}

class MyNotificationState {
    constructor( public open: boolean, public message: string ) {}
}

export default class MyNotification extends Component<MyNotificationProps, MyNotificationState>  {
    constructor(props: any) {
        super(props);
        this.state = new MyNotificationState(false, props.message);
    }

    handleCloseButtonClick = (e: any) => {
        e.preventDefault();
        this.props.onClose();
    };

    static getDerivedStateFromProps(nextProps: any, myState: any) {
        return { open: nextProps.message.length > 0, message: nextProps.message };
    }

    render() {
        return ReactDOM.createPortal(this.renderWidget(), notificationRoot as Element);
    }

    renderWidget = () => {
        return (
            <>
                {this.state.open && (
                    <div className="notification_window">
                        <header className="notification_header">
                            <button className="notification_close" onClick={this.handleCloseButtonClick}>X</button>
                        </header>
                        <div className="notification_messages">
                            {this.state.message}
                        </div>
                    </div>
                )
                }
            </>
        );
    };
}