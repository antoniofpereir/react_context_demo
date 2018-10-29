import React from 'react';

import deepCopy from '../utils/deepCopy';

import { filterAction } from './ActionsController';

export const AppContext = React.createContext();

export default function initContext(actions, ...data) {
    return class GenericContext extends React.PureComponent {
        constructor() {
            super();

            let context = Object.assign(...data);

            const contextFromLocalStorage = this.getContextFromLocalStorage();

            this.state = contextFromLocalStorage || context;

            this.execute = (actionType, ...param) => {
                const action = filterAction(actionType, actions);
                this.executeAction(action, param);
            };
        }

        executeAction(action, param) {
            if (action.request === null) {
                if (param.length === 0) {
                    this.setStateAndUpdateLocalStorage(null, action.functionalSetState);
                } else if (param.length === 1) {
                    this.setStateAndUpdateLocalStorage(param[0], action.functionalSetState);
                } else if (param.length > 1) {
                    this.setStateAndUpdateLocalStorage(param, action.functionalSetState);
                }

            } else {
                if (param.length === 0) {
                    this.apiRequest(action.request, action.functionalSetState)
                } else if (param.length === 1) {
                    this.apiRequest(action.request, action.functionalSetState, param[0]);
                } else if (param.length > 1) {
                    this.apiRequest(action.request, action.functionalSetState, param);
                }
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
            return JSON.parse(localStorage.getItem('context_test'));
        }

        render() {
            console.log("context render");
            return (
                <AppContext.Provider value={{state: this.state, execute: this.execute}}>
                    {this.props.children}
                </AppContext.Provider>
            );
        }

    }
}