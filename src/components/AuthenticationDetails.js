import React from 'react';

import { AppConsumer } from '../context';

const style = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: '5px',
    paddingTop: '50px',
}

const AuthenticationDetails = () => {
    return (
        <AppConsumer>
            {context =>
                <div style={style}>
                    <h1>Authentication Details: {context.authenticationDetails}</h1>
                </div>
            }
        </AppConsumer>
    );
}

export default AuthenticationDetails;