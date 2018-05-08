import React from 'react';

import deepCopy from '../utils/deepCopy';

const AppContext = React.createContext();

export class GenericContext extends React.PureComponent {

    apiRequest(request, functionalSetState, param) {
        request(this.state.setStateAndUpdateLocalStorage, functionalSetState, param);
    }

    setStateAndUpdateLocalStorage(data, functionalSetState) {
        this.setState(functionalSetState(this.state, data), () => {
            let newState = deepCopy(this.state);
            localStorage.setItem('context_test', JSON.stringify(newState));
            console.log('Context in state: ', this.state);
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

export const GenericConsumer = AppContext.Consumer;