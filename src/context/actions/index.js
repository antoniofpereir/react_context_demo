// Actions Controller
import { createAction } from '../../contextLibrary';

// API Requests
import { authenticationRequest } from '../../requests/authenticationRequests';

// Functional Set States
import { setAuthentication } from '../stateChanges/authenticationStateChanges';
import { toggleAwesomeText } from '../stateChanges/localStateChanges';

// Defining Actions
export const actions = {
    'login': createAction(authenticationRequest, setAuthentication),
    'toggleText': createAction(null, toggleAwesomeText),
}