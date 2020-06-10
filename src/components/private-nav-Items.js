/**@jsx jsx */
import { jsx } from 'theme-ui';
import { Button, IconButton } from '@theme-ui/components';
import { useState, Fragment } from 'react';
import { Link, Route, Switch, useHistory, NavLink } from 'react-router-dom';
import { queryCache } from 'react-query';

import PublishDialog from '../components/publish-dialog';

function PrivateNavItems() {
   const [showPublish, setShowPublish] = useState(false);
   const history = useHistory();
   const loggedInUser = queryCache.getQueryData('user');

   const handleLogout = () => {
      localStorage.removeItem('jwt-token');
      queryCache.removeQueries('user');
      history.push('/');
   };

   return (
      <Fragment>
         <Switch>
            <Route path={['/article/create', '/article/edit']}>
               <Button
                  variant='links.nav'
                  onClick={() => setShowPublish(true)}
                  sx={{ display: 'flex', justifyContent: 'center' }}
                  bg='muted'
               >
                  Publish
               </Button>
            </Route>
            <Route path='/'>
               <Link to='/article/create' sx={{ variant: 'links.nav' }}>
                  New Article
               </Link>
            </Route>
         </Switch>
         <NavLink
            to={`/profiles/${loggedInUser.username}`}
            sx={{ variant: 'links.nav' }}
            activeClassName='active'
         >
            {loggedInUser.username}
         </NavLink>
         <IconButton
            onClick={() => handleLogout()}
            sx={{ border: 'none', ml: 1 }}
         >
            <span className='material-icons'>logout</span>
         </IconButton>
         {showPublish && (
            <PublishDialog onClose={() => setShowPublish(false)} />
         )}
      </Fragment>
   );
}

export default PrivateNavItems;
