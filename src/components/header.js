/**@jsx jsx */
import { jsx } from '@theme-ui/core';
import { Flex } from '@theme-ui/components';
import Button from './button';
import { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';

import PrivateNavItems from './private-nav-Items';

function Header({ setMode, mode }) {
   const auth = useAuth();
   const isLoggedIn = auth.user ? true : false;

   return (
      <Flex
         as='header'
         sx={{
            px: 3,
            height: 64,
            alignItems: 'center',
            boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)',
            zIndex: '500',
            justifyContent: 'space-between',
         }}
      >
         <Flex>
            <Link to='/' sx={{ variant: 'links.nav' }}>
               <h2>Medium</h2>
            </Link>
         </Flex>
         <Flex
            sx={{
               whiteSpace: 'nowrap',
               '& > *': { textAlign: 'center', ml: 1 },
            }}
         >
            <NavLink
               exact
               to='/'
               sx={{ variant: 'links.nav' }}
               activeClassName='active'
            >
               Home
            </NavLink>
            {!isLoggedIn ? (
               <Fragment>
                  <NavLink
                     to='/login'
                     sx={{ variant: 'links.nav' }}
                     activeClassName='active'
                  >
                     Sign in
                  </NavLink>
                  <NavLink
                     to='/register'
                     sx={{ variant: 'links.nav' }}
                     activeClassName='active'
                  >
                     Sign up
                  </NavLink>
               </Fragment>
            ) : (
               <PrivateNavItems />
            )}
            <Button
               sx={{ ml: 1, variant: 'links.nav', bg: 'muted' }}
               onClick={e => setMode(mode === 'default' ? 'dark' : 'default')}
            >
               {mode}
            </Button>
         </Flex>
      </Flex>
   );
}

export default Header;
