// Init Context
import { initContext } from '../contextLibrary';

// Actions
import { actions } from './actions';

// Contexts
const loginInformation = {
    isLogged: false,
    authenticationDetails: {
        message: '',
        username: '',
    },
    awesomeTextVisible: false,
}

const lelInformation = {
    lel: 'yes lel'
}

const anotherLelInformation = {
    anotherLel: 'lelel'
}

// Generating Context Provider
export const ContextProvider = initContext(actions, 
                                               {loginInformation, 
                                               lelInformation, 
                                               anotherLelInformation});