import deepCopy from '../../utils/deepCopy';

export function toggleAwesomeText(currentState) {
    let state = deepCopy(currentState);
    state.awesomeTextVisible = !state.awesomeTextVisible;
    return state;
}