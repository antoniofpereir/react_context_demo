import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

/* Context */
import { AppConsumer } from '../context';

const style = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: '5px',
}

const Test = (props) => {
    return (
        <AppConsumer>
            {context =>
                <Paper zDepth={2} style={style}>
                    <div>
                        <RaisedButton label="Button" onClick={context.toggleLogin} />
                        <div>
                            {context.isLogged ? 'Is Logged' : 'Not Logged'}
                        </div>
                    </div>
                    <div>
                        <TextField id='textfield' onChange={context.changeText} />
                        <div>
                            {context.text}
                        </div>
                    </div>
                </Paper>
            }
        </AppConsumer>
    );
}

export default Test;