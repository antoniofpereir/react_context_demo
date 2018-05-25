import { generateContext } from '../contextLibrary';

const FirstContext = {

    isLogged: false,
    authenticationDetails: {
        message: '',
        username: '',
    },
    awesomeTextVisible: false,

    logout: () => {
        localStorage.clear();
        window.location.reload();
    },
}

const SecondContext = {
    lel: 'yes lel'
}

export const AppProvider = generateContext(FirstContext, SecondContext);