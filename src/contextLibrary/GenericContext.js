import React from 'react';

import deepCopy from '../utils/deepCopy';

import { filterAction } from './ActionsController';

export const AppContext = React.createContext();

export default function generateContext(actions, ...data) {
    return class GenericContext extends React.PureComponent {

        constructor(props) {
            let context = Object.assign(...data);

            context.execute = (actionType, ...param) => {
                const action = filterAction(actionType, actions);
                this.executeAction(action, param);
            };

            super(props);
            this.state = context;
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
}