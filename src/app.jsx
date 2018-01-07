import React from 'react';
import { render } from 'react-dom';
import ErrorBoundary from '@components/Common/ErrorBoundary';
import { inheritParentWH } from '@data/style';
import routes from './route';

render(
  <div style={inheritParentWH}>
    <ErrorBoundary>
      {routes}
    </ErrorBoundary>
  </div>,
  document.getElementById('app'),
);
