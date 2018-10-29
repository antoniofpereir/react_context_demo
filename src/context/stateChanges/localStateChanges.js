import deepCopy from '../../utils/deepCopy';

export function toggleAwesomeText(currentState) {
    let state = deepCopy(currentState);
    state.loginInformation.awesomeTextVisible = !state.loginInformation.awesomeTextVisible;
    return state;
}