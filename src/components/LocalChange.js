import React from 'react';
import { withContext } from '../contextLibrary';

import RaisedButton from 'material-ui/RaisedButton';

const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: '5px',
    paddingTop: '50px'
}

class LocalChanges extends React.PureComponent {

    render() {
        return (
            <div style={style}>
                <RaisedButton label={`${this.props.context.awesomeTextVisible ? 'Hide' : 'Show'} Awesome Text`} onClick={() => this.props.context.execute('toggleText')} />
                {this.props.context.awesomeTextVisible && <h1 style={{ paddingTop: '40px' }}>F3</h1>}
            </div>
        );
    }

}

export default withContext(LocalChanges);