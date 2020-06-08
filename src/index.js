import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryConfigProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query-devtools';
import { ThemeProvider, Styled } from 'theme-ui';

import theme from './theme';
import { DraftArticleProvider } from './context/draft-article';
import App from './app';
import { AuthProvider } from './hooks/use-auth';

const queryConfig = {
   refetchAllOnWindowFocus: false,
};

ReactDom.render(
   <BrowserRouter>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <ReactQueryConfigProvider config={queryConfig}>
         <AuthProvider>
            <ThemeProvider theme={theme}>
               <DraftArticleProvider>
                  <Styled.root>
                     <App />
                  </Styled.root>
               </DraftArticleProvider>
            </ThemeProvider>
         </AuthProvider>
      </ReactQueryConfigProvider>
   </BrowserRouter>,
   document.getElementById('root')
);
