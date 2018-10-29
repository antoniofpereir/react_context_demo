import React from 'react';

import { AppContext } from '../contextLibrary';

const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: '5px',
    paddingTop: '50px',
}

class AuthenticationDetails extends React.PureComponent {
    static contextType = AppContext;

    render() {
        return (
            <div style={style}>
                <h1>{this.context.state.isLogged ? 'Authentication Details:' : 'Please Login'} {this.context.state.authenticationDetails.message}</h1>
                {this.context.state.isLogged && <h2>Hello, {this.context.state.authenticationDetails.username}</h2>}
            </div>
        );
    }
}

export default AuthenticationDetails;