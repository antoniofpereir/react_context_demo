export function changeText(state, props) {
    console.log('State', state);
    console.log('Props', props);
    return {text: state};
}