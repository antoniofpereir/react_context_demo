export function authenticationRequest(callback, functionalSetState, param) {
    console.log('Authentication API request received params: ', param)
    let response = 'Poop';
    console.log('Gonna execute callback and send response containing: ', response);
    callback(response, functionalSetState);
}