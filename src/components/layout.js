/**@jsx jsx */
import { jsx } from '@theme-ui/core';
import { Flex } from '@theme-ui/components';
import GlobalStyle from './global-style';
import Header from './header';
import Footer from './footer';
import { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import PageNotFoundPage from '../pages/page-not-found';

const Layout = ({ mode, setMode, children }) => {
   const { state } = useLocation();

   return (
      <Flex sx={{ flexDirection: 'column', minHeight: '100vh' }}>
         <GlobalStyle />
         {state?.from == '404' ? (
            <PageNotFoundPage />
         ) : (
            <Fragment>
               <Header setMode={setMode} mode={mode} />
               <Flex
                  as='main'
                  mx='auto'
                  sx={{
                     justifyContent: 'center',
                     minHeight: 'calc(100vh - 128px)',
                     width: '100%',
                     maxWidth: 1140,
                  }}
               >
                  {children}
               </Flex>
               <Footer />
            </Fragment>
         )}
      </Flex>
   );
};

export default Layout;
