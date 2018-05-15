// Actions Controller
import { createAction, filterAction } from '../../contextLibrary/ActionsController';

// API Requests
import { authenticationRequest } from '../../requests/authenticationRequests';

// Functional Set States
import { setAuthentication } from '../stateChanges/authenticationStateChanges';
import { toggleAwesomeText } from '../stateChanges/localStateChanges';

// Defining Actions
const actions = {
    'login': createAction(authenticationRequest, setAuthentication),
    'toggleText': createAction(null, toggleAwesomeText),
}

// Calling and exporting the getAction used by the context component
const getAction = (actionType) => filterAction(actionType, actions);
export default getAction;