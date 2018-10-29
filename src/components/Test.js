import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import deepCopy from '../utils/deepCopy';

/* Requests */
import { authenticationRequest } from '../requests/authenticationRequests';

/* Context */
import { context } from '../contextLibrary';

const style = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  margin: '5px',
};

class Test extends React.PureComponent {
  static contextType = context;

  constructor() {
    super();
    this.state = {
      authenticationParams: {
        username: '',
        password: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let state = deepCopy(this.state);
    state.authenticationParams[e.target.id] = e.target.value;
    this.setState(state);
  }

  handleSubmit() {
    authenticationRequest(this.state.authenticationParams).then(response =>
      this.context.execute('login', response)
    );
    this.setState({
      authenticationParams: {
        username: '',
        password: '',
      },
    });
  }

  logout() {
    localStorage.clear();
    window.location.reload();
  }

  render() {
    return (
      <div style={style}>
        <div>
          <TextField
            id="username"
            value={this.state.authenticationParams.username}
            floatingLabelText={
              this.context.loginInformation.isLogged
                ? 'Change Username'
                : 'Username'
            }
            type="text"
            onChange={this.handleChange}
          />
        </div>
        <div>
          {!this.context.loginInformation.isLogged && (
            <TextField
              id="password"
              floatingLabelText="Password"
              type="password"
              onChange={this.handleChange}
            />
          )}
        </div>
        <div>
          <RaisedButton label="Submit" onClick={this.handleSubmit.bind(this)} />
        </div>
        {this.context.loginInformation.isLogged && (
          <div>
            <RaisedButton label="Logout" onClick={this.logout.bind(this)} />
          </div>
        )}
      </div>
    );
  }
}

export default Test;
