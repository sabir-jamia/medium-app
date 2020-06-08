import React from 'react';

import Layout from './components/layout';
import AppRoutes from './app-routes';
import { useAuth } from './hooks/use-auth';
import { useColorMode } from 'theme-ui';

function App() {
   const { status } = useAuth();
   const [mode, setMode] = useColorMode();

   return status == 'loading' ? (
      <span>Loading App...</span>
   ) : status == 'error' ? (
      <span>Error: {error.message}</span>
   ) : (
      <Layout mode={mode} setMode={setMode}>
         <AppRoutes />
      </Layout>
   );
}

export default App;
