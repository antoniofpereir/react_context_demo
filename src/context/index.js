// API Requests
import { authenticationRequest } from '../requests/authenticationRequests';

// Functional Set States
import { setAuthentication } from './stateChanges/authenticationStateChanges';
import { toggleAwesomeText } from './stateChanges/localStateChanges';

// Generic Context imports
import GenericContext from '../contextLibrary/GenericContext';

export class AppProvider extends GenericContext {
    constructor(props) {
        super(props);
        this.state = {

            // Context variables
            isLogged: false,
            authenticationDetails: {
                message: '',
                username: '',
            },
            awesomeTextVisible: false,

            // Context actions
            login: params => {
                this.apiRequest(authenticationRequest, setAuthentication, params);
            },
            logout: () => {
                localStorage.clear();
                window.location.reload();
            },
            toggleAwesomeText: () => {
                this.setStateAndUpdateLocalStorage(null, toggleAwesomeText);
            },
        }
    }
}
