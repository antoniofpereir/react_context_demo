import deepCopy from '../../utils/deepCopy';

export function setAuthentication(currentState, newData) {
    let state = deepCopy(currentState);
    console.log('New Data: ', newData);
    state.authenticationDetails = newData;
    state.isLogged = true;
    return state;
};
