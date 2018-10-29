// Functional Set States
import { setAuthentication } from '../stateChanges/authenticationStateChanges';
import { toggleAwesomeText } from '../stateChanges/localStateChanges';

// Defining Actions
export const actions = {
    'login': setAuthentication,
    'toggleText': toggleAwesomeText,
}