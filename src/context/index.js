import React from 'react';

import { authenticationRequest } from '../requests/authenticationRequests';

import { setAuhtentication } from './stateChanges/authenticationStateChanges';

import deepCopy from '../utils/deepCopy';

const AppContext = React.createContext();

export class AppProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            isLogged: false,
            authenticationDetails: '',
            
            login: params => {
                this.apiRequest(authenticationRequest, setAuhtentication, params);
            },

            setStateAndUpdateLocalStorage: (data, functionalSetState) => {
                this.setStateAndUpdateLocalStorage(data, functionalSetState)
            }
        }

    }

    apiRequest(request, functionalSetState, param) {
        request(this.state.setStateAndUpdateLocalStorage, functionalSetState, param);
    }

    setStateAndUpdateLocalStorage(data, functionalSetState) {
        this.setState(functionalSetState(this.state, data), () => {
            let newState = deepCopy(this.state);
            localStorage.setItem('context_test', JSON.stringify(newState));
        });
    }

    getContextFromLocalStorage() {
        const localStorageContext = JSON.parse(localStorage.getItem('context_test'));

        if (localStorageContext !== null) {
            this.setState(localStorageContext);
        }
    }

    componentDidMount() {
        this.getContextFromLocalStorage();
    }

    render() {
        //local storage updated verification
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export const AppConsumer = AppContext.Consumer;