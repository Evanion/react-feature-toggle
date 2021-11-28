import * as React from 'react';
import './App.css';
import { FeatureProvider } from './feature';
import { FeatureAdvanced } from './FeatureAdvanced';
import { store } from './features';
import { FeatureSimple } from './FeatureSimple';

function App() {
  return (
    <FeatureProvider features={store}>
      <FeatureSimple />
      <FeatureAdvanced />
    </FeatureProvider>
  );
}

export default App;
