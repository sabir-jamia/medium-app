/**@jsx jsx */
import { jsx } from '@theme-ui/core';
import { Flex, Button } from '@theme-ui/components';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';

import PrivateNavItems from './private-nav-Items';

function Header({ setMode, mode }) {
   const auth = useAuth();
   const isLoggedIn = auth.user ? true : false;

   return (
      <Flex
         as='header'
         px={4}
         sx={{
            height: 64,
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)',
            zIndex: '500',
         }}
      >
         <Flex sx={{ minWidth: 0 }}>
            <Link to='/' sx={{ variant: 'links.nav' }}>
               <h2>Medium</h2>
            </Link>
         </Flex>
         <Flex sx={{ whiteSpace: 'nowrap', '& > *': { textAlign: 'center' } }}>
            <Link to='/' sx={{ variant: 'links.nav' }}>
               Home
            </Link>
            {!isLoggedIn ? (
               <Fragment>
                  <Link to='/login' sx={{ variant: 'links.nav' }}>
                     Sign in
                  </Link>
                  <Link to='/register' sx={{ variant: 'links.nav' }}>
                     Sign up
                  </Link>
               </Fragment>
            ) : (
               <PrivateNavItems />
            )}
            <Button
               variant='links.nav'
               sx={{ display: 'flex', justifyContent: 'center', px: 3 }}
               onClick={e => setMode(mode === 'default' ? 'dark' : 'default')}
            >
               {mode}
            </Button>
         </Flex>
      </Flex>
   );
}

export default Header;
