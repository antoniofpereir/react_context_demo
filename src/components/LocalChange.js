import React from 'react';

import { context } from '../contextLibrary';

import RaisedButton from 'material-ui/RaisedButton';

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  margin: '5px',
  paddingTop: '50px',
};

class LocalChanges extends React.PureComponent {
  static contextType = context;

  render() {
    return (
      <div style={style}>
        <RaisedButton
          label={`${
            this.context.loginInformation.awesomeTextVisible ? 'Hide' : 'Show'
          } Awesome Text`}
          onClick={() => this.context.execute('toggleText')}
        />
        {this.context.loginInformation.awesomeTextVisible && (
          <h1 style={{ paddingTop: '40px' }}>F3</h1>
        )}
      </div>
    );
  }
}

export default LocalChanges;
