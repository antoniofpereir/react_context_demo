import React from 'react';
import {toggleLogin} from './authenticationStateChanges';
import {changeText} from './textStateChanges';

const AppContext = React.createContext();

export class AppProvider extends React.Component {
    state = {
        isLogged: false,
        toggleLogin: () => {
            this.setState(toggleLogin);
        },
        
        text: '',
        changeText: event => {
            console.log(event.target.value);
            this.setState(changeText(event.target.value));
        }
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export const AppConsumer = AppContext.Consumer;