import React from 'react';

import Layout from './components/layout';
import AppRoutes from './app-routes';
import { useAuth } from './hooks/use-auth';
import { useColorMode } from 'theme-ui';

const modes = ['default', 'dark', 'deep', 'swiss'];

const getModeName = mode => {
   switch (mode) {
      case 'dark':
         return 'Dark';
      case 'deep':
         return 'Deep';
      case 'swiss':
         return 'Swiss';
      case 'default':
         return 'Light';
      default:
         return mode;
   }
};

function App() {
   const { status } = useAuth();
   const [mode, setMode] = useColorMode();

   const cycleMode = e => {
      const i = modes.indexOf(mode);
      const next = modes[(i + 1) % modes.length];
      setMode(next);
   };

   return status == 'loading' ? (
      <span>Loading App...</span>
   ) : status == 'error' ? (
      <span>Error: {error.message}</span>
   ) : (
      <Layout mode={getModeName(mode)} setMode={cycleMode}>
         <AppRoutes />
      </Layout>
   );
}

export default App;
