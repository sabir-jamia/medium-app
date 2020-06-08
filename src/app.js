import React from 'react';

import Layout from './components/layout';
import AppRoutes from './app-routes';
import { useAuth } from './hooks/use-auth';
import { ColorMode } from 'theme-ui';
import ColorChange from './components/color-change';

function App() {
   const { status } = useAuth();

   return status == 'loading' ? (
      <span>Loading App...</span>
   ) : status == 'error' ? (
      <span>Error: {error.message}</span>
   ) : (
      <>
         <ColorChange />
         {/* <ColorMode /> */}
         <Layout>
            <AppRoutes />
         </Layout>
      </>
   );
}

export default App;
