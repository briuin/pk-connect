import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to start up the app
const mountElement = (el) => {
  ReactDOM.render(<App />, el);
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_pk-connect-dev-root');

  if (devRoot) {
    mountElement(devRoot);
  }
}

// We are running through container
// and we should export the mount function
export { mountElement };