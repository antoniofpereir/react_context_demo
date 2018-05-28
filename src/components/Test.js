import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import deepCopy from '../utils/deepCopy';

/* Context */
import { withContext } from '../contextLibrary';

const style = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: '5px',
}

class Test extends React.PureComponent {

    constructor() {
        super();
        this.state = {
            authenticationParams: {
                username: '',
                password: '',
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let state = deepCopy(this.state);

        if (e.target.id === 'username') {
            state.authenticationParams.username = e.target.value;
        }
        if (e.target.id === 'password') {
            state.authenticationParams.password = e.target.value;
        }

        this.setState(state);
    }

    handleSubmit() {
        this.props.context.execute('login', this.state.authenticationParams)
        this.setState({
            authenticationParams: {
                username: '',
                password: '',
            }
        })
    }

    logout() {
        localStorage.clear();
        window.location.reload();
    }

    render() {
        return (
            <div style={style}>
                <div>
                    <TextField id='username' value={this.state.authenticationParams.username} floatingLabelText={this.props.context.isLogged ? "Change Username" : "Username"} type='text' onChange={this.handleChange} />
                </div>
                <div>

                    {!this.props.context.isLogged && <TextField id='password' floatingLabelText="Password" type='password' onChange={this.handleChange} />}
                </div>
                <div>
                    <RaisedButton label="Submit" onClick={this.handleSubmit.bind(this)} />
                </div>
                {this.props.context.isLogged &&
                    <div>
                        <RaisedButton label="Logout" onClick={this.logout.bind(this)} />
                    </div>
                }
            </div>
        );
    }
}

export default withContext(Test);