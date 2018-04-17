export function toggleLogin(state, props) {
    console.log('State', state);
    console.log('Props', props);
    return { isLogged: !state.isLogged};
};
