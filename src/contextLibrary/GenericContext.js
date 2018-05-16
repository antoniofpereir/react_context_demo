import React from 'react';

import deepCopy from '../utils/deepCopy';

export const AppContext = React.createContext();

export default class GenericContext extends React.PureComponent {

    executeAction(action, param) {
        if(action.request === null) {
            this.setStateAndUpdateLocalStorage(param, action.functionalSetState)
        } else {
            this.apiRequest(action.request, action.functionalSetState, param)
        }
    }

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
        this.test('poop','pooping', 'more pooping', 'even more pooping');
        this.getContextFromLocalStorage();
    }

    test(ola, ...param) {
        console.log('Poop', ola);
        console.log('Group of poops', param);
    }
    
    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        );
    }

}