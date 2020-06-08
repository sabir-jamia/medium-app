/**@jsx jsx */
import { jsx } from 'theme-ui';
import { Button, IconButton } from '@theme-ui/components';
import { useState, Fragment } from 'react';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
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
                  onClick={() => setShowPublish(true)}
                  sx={{ variant: 'links.nav', bg: 'muted', px: 10 }}
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
         <Link
            to={`/profiles/${loggedInUser.username}`}
            sx={{ variant: 'links.nav' }}
         >
            {loggedInUser.username}
         </Link>
         <IconButton onClick={() => handleLogout()} sx={{ border: 'none' }}>
            <span className='material-icons'>power_settings_new</span>
         </IconButton>
         {showPublish && (
            <PublishDialog onClose={() => setShowPublish(false)} />
         )}
      </Fragment>
   );
}

export default PrivateNavItems;
