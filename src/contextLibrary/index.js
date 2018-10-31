import React from 'react';

/**
 * Context object containing the Provider and Consumer objects.
 * The export is necessary in order to use contextType to inject context (React@16.6.0).
 */
export const AppContext = React.createContext();

/**
 * Init app context provider to wrap the application.
 * @param {*} actions object containing the mapping between action tag and functionalSetState.
 * @param  {...any} data input to the action (optional).
 * Returns a wrapper component that will provide the context to all the children.
 */
export function initContext(localStorageName, actions, ...data) {
  return class GenericContext extends React.PureComponent {
    constructor() {
      super();
      const newContext = Object.assign(...data);
      this.contextFromLocalStorage = this.getContextFromLocalStorage();

      /**
       * Init context with newContext if contextFromLocalStorage is empty.
       */
      this.state = this.contextFromLocalStorage || newContext;

      /**
       * Execute function decides functionalSetState based on actionType.
       */
      this.execute = (actionType, ...params) => {
        const functionalSetState = actions[actionType];
        this.setStateAndUpdateLocalStorage(functionalSetState, params);
      };
    }

    /**
     * Saves the state to localStorage after initializing for the first time.
     */
    componentDidMount() {
      if (!this.contextFromLocalStorage) {
        localStorage.setItem(localStorageName, JSON.stringify(this.state));
      }
    }

    /**
     * Uses setState to update context component state and stores the new state in local storage.
     * @param {*} functionalSetState function that returns a state change.
     * @param {*} params used in functionalSetState (optional).
     */
    setStateAndUpdateLocalStorage = (functionalSetState, params) => {
      this.setState(
        prevState => functionalSetState(prevState, ...params),
        () => {
          localStorage.setItem(localStorageName, JSON.stringify(this.state));
          this.contextFromLocalStorage = this.getContextFromLocalStorage();
        }
      );
    };

    /**
     * Retrieves context from localStorage.
     */
    getContextFromLocalStorage = () =>
      JSON.parse(localStorage.getItem(localStorageName));

    /**
     * Wraps child components with context provider.
     */
    render() {
      return (
        <AppContext.Provider value={{ ...this.state, execute: this.execute }}>
          {this.props.children}
        </AppContext.Provider>
      );
    }
  };
}
