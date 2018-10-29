import React from 'react';

import Test from './components/Test';
import AuthenticationDetails from './components/AuthenticationDetails';
import LocalChange from './components/LocalChange';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/* Context Imports */
import { ContextProvider } from './context';

export default class App extends React.PureComponent {
  render() {
    return (
      <ContextProvider>
        <MuiThemeProvider>
          <React.Fragment>
            <AuthenticationDetails />
            <Test />
            <LocalChange />
          </React.Fragment>
        </MuiThemeProvider>
      </ContextProvider>
    );
  }
}
