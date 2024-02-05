'use client';

import { Provider } from 'react-redux';
import { reduxStore } from '@/lib/redux';
import Navigation from '@/components/Navigation/Navigation';
import { Content } from '@carbon/react';

export function Providers({ children }) {
  return (
    <Provider store={reduxStore}>
      <div>
        <Navigation />
        <Content>{children}</Content>
      </div>
    </Provider>
  );
}
