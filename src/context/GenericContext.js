import React from 'react';

export class GenericContext extends React.PureComponent {

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
    
}