// API Requests
import { authenticationRequest } from '../../requests/authenticationRequests';

// Functional Set States
import { setAuthentication } from '../stateChanges/authenticationStateChanges';
import { toggleAwesomeText } from '../stateChanges/localStateChanges';

export default function getAction(actionType) {
    let request = null;
    let functionalSetState = null;

    switch (actionType) {
        case 'login':
            request = authenticationRequest;
            functionalSetState = setAuthentication;
            break;
        case 'toggleText':
            functionalSetState = toggleAwesomeText;
        // no default
    }
    return createAction(request, functionalSetState);
}

function createAction(request, functionalSetState) {
    return {
        request: request,
        functionalSetState: functionalSetState
    }
}