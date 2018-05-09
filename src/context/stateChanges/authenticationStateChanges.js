import deepCopy from '../../utils/deepCopy';

export function setAuthentication(currentState, newData) {
    let state = deepCopy(currentState);
    state.authenticationDetails = newData;
    state.isLogged = true;
    return state;
};
