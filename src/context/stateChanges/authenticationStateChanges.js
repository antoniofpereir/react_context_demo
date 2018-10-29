import deepCopy from '../../utils/deepCopy';

export function setAuthentication(currentState, newData) {
    console.log('current state: ', currentState);
    console.log('new data: ', newData);
    let state = deepCopy(currentState);
    state.loginInformation.authenticationDetails = newData;
    state.loginInformation.isLogged = true;
    return state;
};
