export function authenticationRequest(param) {
  let response = {
    message: 'Poop',
    username: param.username,
  };
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(response);
    }, 1000);
  });
}
