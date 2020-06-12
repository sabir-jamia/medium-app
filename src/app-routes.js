import React, { lazy } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

import HomePage from './pages/home';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';

const CreateArticlePage = lazy(() =>
   import(/* webpackChunkName: "create-article" */ './pages/create-article')
);
const EditArticlePage = lazy(() =>
   import(/* webpackChunkName: "edit-article" */ './pages/edit-article')
);
const ProfilePage = lazy(() =>
   import(/* webpackChunkName: "profile" */ './pages/profile')
);
const ArticlePage = lazy(() =>
   import(/* webpackChunkName: "article" */ './pages/article')
);

const AppRoutes = () => {
   const location = useLocation();

   return (
      <Switch>
         <Route exact path='/'>
            <HomePage />
         </Route>
         <Route path='/articles/:slug'>
            <ArticlePage />
         </Route>
         <Route path='/login'>
            <LoginPage />
         </Route>
         <Route path='/register'>
            <RegisterPage />
         </Route>
         <Route path='/profiles/:username'>
            <ProfilePage />
         </Route>
         <Route exact path='/article/create'>
            <CreateArticlePage />
         </Route>
         <Route path='/article/edit/:slug'>
            <EditArticlePage />
         </Route>
         <Route path='*'>
            <Redirect to={{ ...location, state: { from: '404' } }} />
         </Route>
      </Switch>
   );
};

export default AppRoutes;
