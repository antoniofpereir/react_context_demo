import React from 'react';

import deepCopy from '../utils/deepCopy';

export const AppContext = React.createContext();

export default class GenericContext extends React.PureComponent {

    apiRequest(request, functionalSetState, param) {
        request(this.setStateAndUpdateLocalStorage.bind(this), functionalSetState, param);
    }

    setStateAndUpdateLocalStorage(data, functionalSetState) {
        this.setState(functionalSetState(this.state, data), () => {
            let newState = deepCopy(this.state);
            localStorage.setItem('context_test', JSON.stringify(newState));
            console.log("Context in local storage updated to: ", newState);
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
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        );
    }

}