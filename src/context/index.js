// Init Context
import { initContext } from '../contextLibrary';

// Actions
import { actions } from './actions';

// Contexts
const FirstContext = {
    isLogged: false,
    authenticationDetails: {
        message: '',
        username: '',
    },
    awesomeTextVisible: false,
}

const SecondContext = {
    lel: 'yes lel'
}

const ThirdContext = {
    anotherLel: 'lelel'
}

// Generating Context Provider
export const ContextProvider = initContext(actions, 
                                               FirstContext, 
                                               SecondContext, 
                                               ThirdContext);