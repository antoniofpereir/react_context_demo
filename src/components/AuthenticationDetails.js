import React from 'react';

import withContext from '../contextLibrary/GenericConsumer';

const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: '5px',
    paddingTop: '50px',
}

class AuthenticationDetails extends React.PureComponent {
    render() {
        return (
            <div style={style}>
                <h1>Authentication Details: {this.props.context.authenticationDetails.message}</h1>
                { this.props.context.isLogged && <h2>Hello, {this.props.context.authenticationDetails.username}</h2>}
            </div>
        );
    }
}

export default withContext(AuthenticationDetails);