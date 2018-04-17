import React from 'react';
import Test from './components/Test';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/* Context Imports */
import { AppProvider } from './context';

export default class App extends React.PureComponent {
  render() {
    return (
      <MuiThemeProvider>
        <AppProvider >
          <Test/>
        </AppProvider>
      </MuiThemeProvider>
    );
  }
}