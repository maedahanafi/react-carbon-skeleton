'use client';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, reduxStore } from '@/lib/redux';
import Navigation from '@/components/Navigation/Navigation';
import { Content } from '@carbon/react';

export function Providers({ children }) {
  return (
    <Provider store={reduxStore}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <Navigation />
          <Content>{children}</Content>
        </div>
      </PersistGate>
    </Provider>
  );
}
