export function authenticationRequest(callback, functionalSetState, param) {
    let response = {
        message: 'Poop',
        username: param.username,
    };
    callback(response, functionalSetState);
}