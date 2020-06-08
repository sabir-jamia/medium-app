import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/home';
import ArticlePage from './pages/article';
import ProfilePage from './pages/profile';
import CreateArticlePage from './pages/create-article';
import EditArticle from './pages/edit-article';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';

const AppRoutes = () => (
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
         <EditArticle />
      </Route>
   </Switch>
);

export default AppRoutes;
