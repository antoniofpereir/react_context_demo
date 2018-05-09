// API Requests
import { authenticationRequest } from '../requests/authenticationRequests';

// Functional Set States
import { setAuthentication } from './stateChanges/authenticationStateChanges';

// Generic Context imports
import GenericContext from '../contextLibrary/GenericContext';

export class AppProvider extends GenericContext {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: false,
            authenticationDetails: {
                message: '',
                username: '',
            },

            login: params => {
                this.apiRequest(authenticationRequest, setAuthentication, params);
            },
        }
    }
}
