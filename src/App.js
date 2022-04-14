import React from 'react';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import ConnectionStatus from './components/ConnectionStatus';

const generateClassName = createGenerateClassName({
  productionPrefix: 'pk-connect',
});

export default () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <ConnectionStatus />
      </StylesProvider>
    </div>
  );
};
