/**@jsx jsx */
import { jsx } from '@theme-ui/core';
import { Flex } from '@theme-ui/components';
import GlobalStyle from './global-style';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
   return (
      <Flex sx={{ flexDirection: 'column', minHeight: '100vh' }}>
         <GlobalStyle />
         <Header />
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
      </Flex>
   );
};

export default Layout;
