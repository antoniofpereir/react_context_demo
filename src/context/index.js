import { authenticationRequest } from '../requests/authenticationRequests';

import { setAuthentication } from './stateChanges/authenticationStateChanges';

import { GenericContext, GenericConsumer } from './GenericContext';

export const AppConsumer = GenericConsumer;

export class AppProvider extends GenericContext {
    constructor(props) {
        super(props);

        this.state = {
            isLogged: false,
            authenticationDetails: '',

            login: params => {
                this.apiRequest(authenticationRequest, setAuthentication, params);
            },

            setStateAndUpdateLocalStorage: (data, functionalSetState) => {
                this.setStateAndUpdateLocalStorage(data, functionalSetState)
            }
        }
    }
}
