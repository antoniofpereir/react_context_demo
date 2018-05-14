// Actions
import getAction from './actions';

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
            logout: () => {
                localStorage.clear();
                window.location.reload();
            },

            // EXECUTE
            execute: (actionType, param) => {
                this.executeAction(getAction(actionType), param);
            }
        }
    }
}
